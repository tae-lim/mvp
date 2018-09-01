// Need express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const database = require('../db/index.js');
const SRC_DIR = path.join(__dirname, '../public/dist');

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
app.get('/', (req, res) => {
  database.query((err, gameData) => {
    if (err) {
      console.log('server did not receive gameData');
    }
    console.log(req);
    res.send(gameData);
  });
});

// //post functions
app.post('/', (req, res) => {
  database.storeData(req.body);
})

// need to connect to the server
app.listen(3000, () => {
  console.log('Server Connected: Port 3000');
})