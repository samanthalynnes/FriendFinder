// Dependencies

var path = require('path');
var friends = require("../data/friends");

module.exports = function (app) {

    // GET route that will display a JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // POST route for incoming survey results and calculate results
    app.post("/api/friends", function (req, res) {

        friends.push(req.body);

        var newScore = req.body.scores;

        var match = 0;

        var lowestScore = 50;

        for (var i = 0; i < (friends.length - 1); i++) {
            var compare = friends[i].scores;
            var totalDifference = 0;

            for (var j = 0; j < currentScore.length; j++) {
                var difference = Math.abs(parseInt(newScore[j]) - parseInt(compare[j]));
                totalDifference = totalDifference + difference;
            }
            if (totalDifference < lowestScore) {
                lowestScore = totalDifference;
                match = i;
            }
        }
        res.send(friends[match]);
    });
};