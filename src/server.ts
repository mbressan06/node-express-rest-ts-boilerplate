import * as bodyParser from 'body-parser';
import * as express from 'express'; 
import * as fs from 'fs';
import * as http from 'http'; 

var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser'); 

const secret = 'secret'; // TODO: implement this  JWT secret as env config

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
      //Auth ok 
      const id = 1; // TODO: work with ID from database
      var privateKey  = fs.readFileSync('./private.key', 'utf8');
      var token = jwt.sign({ id }, privateKey, { 
          expiresIn: 3000, 
          algorithm:  "RS256" //SHA-256 hash signature
      }); 
      
      console.log("Logged in and generated token!");
      return res.status(200).send({ auth: true, token: token }); 
  }
  
  return res.status(401).send('Invalid login!'); 
})

//rota de logout
app.post('/logout', function(req, res) { 
    console.log("Logged out and JWT cancelled");
    res.status(200).send({ auth: false, token: null }); 
});

//função que verifica se o JWT é ok
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