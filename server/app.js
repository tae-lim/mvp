// Need express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const database = require('../db/index.js');
const SRC_DIR = path.join(__dirname, '../public/dist');
const helper = require('../helpers/apifunctions.js');

// Need middleware
  //need body parser
  // need to have app.use

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended: false}));
// connect static html page with the server
app.use(express.static(SRC_DIR));
// // create application/json parser
// app.use(bodyParser.json())

// Need require? Maybe needed if doing api calls
// get functions
app.get('/game', (req, res) => {
  database.query((err, gameData) => {
    if (err) {
      console.log('server did not receive gameData');
    }
    res.send(gameData);
  });
});

//make api call to IGDB at a given endpoint
//content type
//Headers
// Key	Value
// user-key	YOUR_KEY
// Accept	application/json


app.get('/getGood', (req, res) => {
  
  // helper.getTopGames((gameReviews) => {
  //   res.send(gameReviews);
  // });
  helper.getTopGames();
  
})

// //post functions
app.post('/', (req, res) => {
  database.storeData(req.body);
})

// need to connect to the server
app.listen(3000, () => {
  console.log('Server Connected: Port 3000');
})