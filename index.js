const process = require('process')
const path = require('path')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
  });
   
connection.connect();

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})