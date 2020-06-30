// const process = require('process')
const path = require('path')
const express = require('express')
const app = express()
const mysql = require('mysql');

const conection = require("connection.js");
var todoList = require('../controllers/taskController.js');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//opening conection to heroku
const heroku = (port == process.env.PORT)?true:false;
sqlDB = connection(heroku);


//Routes
app.route('/').get((req, res) =>{
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.route('/tasks')
.get(todoList.list_all_tasks)
.post(todoList.create_a_task);

app.route('/tasks/:taskId')
.get(todoList.read_a_task)
.put(todoList.update_a_task);


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


