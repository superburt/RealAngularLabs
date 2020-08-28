const express = require("express"); //used for routing
const app = express();
const path = require('path');
const http = require("http").Server(app); //used to provide http functionality
var cors = require('cors')
app.use(cors());
//app.use(express.static(__dirname + "/www"));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// support parsing of application/json type post data
app.use(bodyParser.json());

http.listen(3000,()=>{
    var d = new Date();
    console.log('Server has been started on : ' + d);
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/../dist/index');
});


require('./routes/api-login.js')(app,path);



// let server = http.listen(3000, function () {
//     let host = server.address().address;
//     let port = server.address().port;
//     console.log('My First Nodejs Server!');
//     console.log("Server listening on: "+ host + " port:" + port);
// });
// app.get("/api/auth", function (req, res) {
//     res.sendFile(__dirname + "/www/api/auth.html");
// });


