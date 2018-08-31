// Need express
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// Need middleware
  //need body parser
  // need to have app.use
app.use(bodyParser.urlencoded({extended: false}))
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