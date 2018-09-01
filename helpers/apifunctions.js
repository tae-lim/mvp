let request = require('request');
let config = require("../config.js");

let getTopGames = function (callback) {
  let options = {
      url: 'https://api-endpoint.igdb.com/games/?fields=name,summary,aggregated_rating,rating,url&order=popularity:desc',
      headers: {
          'user-key': config.key,
          'accept': 'application/json'
      }
  }

  request.get(options, (err, res, gameReviews) => {
    console.log('this is options', options);  
    if (err) {
          console.log('error when getting data from endpoint');
      }
      console.log('within request.get', gameReviews);
      callback(gameReviews);
  })
}

module.exports.getTopGames = getTopGames;