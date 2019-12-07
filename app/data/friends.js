
var friends = [{
    "name": "Mugatu",
    "photo": "https://d2ycltig8jwwee.cloudfront.net/articles/3213/detail.b141f8af.png",
    "scores": [5, 2, 1, 2, 1, 1, 5, 2, 1, 5]
},
{
    "name": "Ricky Bobby",
    "photo": "https://ih1.redbubble.net/image.501798302.6331/aps,650x642,small,transparent-pad,750x1000,f8f8f8.u2.jpg",
    "scores": [3, 3, 2, 5, 2, 2, 5, 3, 1, 1]
},
{
    "name": "Brennan Huff",
    "photo": "https://pbs.twimg.com/profile_images/706234525274267648/DA46N6iE_400x400.jpg",
    "scores": [1, 3, 3, 3, 4, 5, 3, 1, 1, 1]
},
{
    "name": "Frank the Tank",
    "photo": "https://i.pinimg.com/originals/1d/6f/14/1d6f14fc12b2eabd4eec6d0b1a28c380.jpg",
    "scores": [1, 5, 3, 4, 5, 2, 2, 2, 1, 1]
},
{
    "name": "Ron Burgundy",
    "photo": "https://inews.co.uk/images-i.jpimedia.uk/imagefetch/https://inews.co.uk/wp-content/uploads/2019/07/Crystal-iNews-template-2.jpg?width=640",
    "scores": [5, 4, 2, 3, 4, 1, 4, 2, 1, 2]
},
{
    "name": "Buddy",
    "photo": "http://m.quickmeme.com/img/f3/f37ff1a580754b3f35c2103d6e7e4a0511b8a013d3b0d5fe0ae1fac061211055.jpg",
    "scores": [3, 2, 5, 3, 2, 3, 1, 1, 5, 1]
},
{
    "name": "James King",
    "photo": "https://i.ytimg.com/vi/C_a4jHB-Epw/maxresdefault.jpg",
    "scores": [5, 3, 3, 3, 1, 1, 3, 5, 1, 1]
}
]


//   6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example:
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//    * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.