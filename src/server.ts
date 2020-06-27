import * as bodyParser from 'body-parser';
import * as express from 'express'; 
const fs = require('fs');
import * as http from 'http'; 

var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser'); 

require("dotenv-safe").config();

const app = express() 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 

// Protected route
app.get('/products', verifyJWT, (req, res, next) => { 
    console.log("Returnig all products!");
    res.status(200).json([{id:1, product:'Product 1'}]);
}) 

// Login route
app.post('/login', (req, res, next) => { 
  if(req.body.user === 'luiz' && req.body.pwd === '123'){ 
      //auth ok 
      const id = 1; //esse id viria do banco de dados 
      var privateKey  = fs.readFileSync('./private.key', 'utf8');
      var token = jwt.sign({ id }, privateKey, { 
          expiresIn: 300, // 5min 
          algorithm:  "RS256" //SHA-256 hash signature
      }); 
      
      console.log("Fez login e gerou token!");
      return res.status(200).send({ auth: true, token: token }); 
  }
  
  return res.status(401).send('Login inválido!'); 
})

// Logout Route
app.post('/logout', function(req, res) { 
    console.log("Logged out and JWT cancelled");
    res.status(200).send({ auth: false, token: null }); 
});

// Check if JWT is OK
function verifyJWT(req, res, next){ 
  var token = req.headers['x-access-token']; 
  if (!token) 
      return res.status(401).send({ auth: false, message: 'No Token, no data.' }); 
  
  var publicKey  = fs.readFileSync('./public.key', 'utf8');
  jwt.verify(token, publicKey, {algorithm: ["RS256"]}, function(err, decoded) { 
      if (err) 
          return res.status(500).send({ auth: false, message: 'Invalid Token.' }); 
      
      req.userId = decoded.id; 
      console.log("User Id: " + decoded.id)
      next(); 
  }); 
}

var server = http.createServer(app); 
server.listen(5000);
console.log("Listening server at port 5000...")