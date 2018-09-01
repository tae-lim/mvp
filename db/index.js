//setup connection with mongoose to mongodb
//create schema for tables
//instantiate mongoose model.
//create functions needed for save and querying data
//export the functions

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/commandcenterdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose connected with MongoDB');
});

var gameSchema = new mongoose.Schema({
  title: String,
  system: String,
  rating: String,
  progress: String
});

var Game = mongoose.model('Games', gameSchema);

//we have to instantiate model and invoke SAVE to save it to model
let storeData = (gameTitle) => {
  console.log(gameTitle)
  let GameData = new Game({
    title: gameTitle.title,
    system: gameTitle.system,
    rating: gameTitle.rating,
    progress: gameTitle.progress
  }).save((err) => {
    if (err) {
      console.log(err);
    }
    console.log('Game Data Saved Succesfully');
  })
}

let query = (callback) => {
  Game.find({})
  .sort({'rating': -1})
  .limit(50)
  .exec((err, gameData) => {
    if (err) {
      console.log('gameData unable to query');
    }
    callback(null, gameData);
  })
}

module.exports.storeData = storeData;
module.exports.query = query;

