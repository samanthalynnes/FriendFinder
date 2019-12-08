

var path = require('path');
var friendData = require("../data/friends");

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });



    app.post("/api/friends", function (req, res) {

        friends.push(req.body);

        var currentScore = req.body.scores;

        var bestFriend = 0;

        var lowestScore = 50;

        for (var i = 0; i < (friends.length - 1); i++) {
            var compare = friends[i].scores;
            var totalDifference = 0;

            for (var j = 0; j < currentScore.length; j++) {
                var difference = Math.abs(parseInt(currentScore[j]) - parseInt(compare[j]));
                totalDifference = totalDifference + difference;
            }
            if (totalDifference < lowestScore) {
                lowestScore = totalDifference;
                bestFriend = i;
            }
        }
        res.send(friends[bestFriend]);
    });
};