// const process = require('process')
const path = require('path')
const express = require('express')
const app = express()
const mysql = require('mysql');

const port = process.env.PORT || 3000;

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'password',
//     database : 'new_schema'
//   });
   
// connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + connection.threadId);
// });

app.get('/ram', (req, res) =>{
    // connection.query('SELECT * FROM tab1', function (error, results, fields) {
    //     if (error) throw error;
    //     else{
    //         console.log(results);
    //         res.send(`The solution is: ${results[0]}`);
    //     } 
    //   }); 
    res.send('Hello World!');
    //   connection.end();
});


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


