const mysql = require('mysql');
const conig = require('./config/cofig.js');
const config = require('./configs/config.js');
const connection = (heroku)=>{
    if(heroku){
        mysql://b4123eef0d855b:a8ccde63@us-cdbr-east-02.cleardb.com/heroku_2c14d6af7873a22?reconnect=true
        con = mysql.createConnection({
            host: conig.host,
            user: config.user,
            password: config.password,
            database: config.database
          });
    }
    else{
        var con = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'password',
            database : 'new_schema'
        });
    }
    con.connect(function(err) {
        if (err) throw err;
        else return con;
    });
    
} 

module.exports = connection;