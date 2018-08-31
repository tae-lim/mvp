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
  //columns go here
});

var Games = mongoose.model('Games', gameSchema);

gameSchema.methods.save = () => {

}

gameSchema.methods.query = () => {

}



module.exports =