import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';

require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

var cookieParser = require('cookie-parser'); 
// var http = require('http'); 
const app = express() 

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 
 
app.get('/', (req, res, next) => {
    res.json({message: "All set!"});
})
 
app.get('/products', (req, res, next) => { 
    console.log("All products!");
    res.json([{id:1, nome:'Product 1'}]);
}) 
 
var server = http.createServer(app); 
server.listen(5000);
console.log("Servidor escutando na porta 5000...")