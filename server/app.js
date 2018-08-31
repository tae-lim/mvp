// Need express
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
let database = require('../db/index.js')

// Need middleware
  //need body parser
  // need to have app.use

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended: false}))
// create application/json parser
app.use(bodyParser.json())

// Need require? Maybe needed if doing api calls






//get functions
app.get('/', (req, res) => {
  res.send('Hello World');
})

//post functions
app.post('/', (req, res) => {
  res.send('Goodbye World');
})

// need to connect to the server
app.listen(3000, () => {
  console.log('Server Connected: Port 3000');
})