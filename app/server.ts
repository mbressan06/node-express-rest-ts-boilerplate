import express from 'express'; 
import http from 'http'; 
import cookieParser from 'cookie-parser'; 
import bodyParser from 'body-parser';

require('dotenv-safe').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 

require('./routes/auth.routes')(app);
require('./routes/product.routes')(app);
require('./routes/user.routes')(app);

var server = http.createServer(app); 
server.listen(5000);

// TODO: Remove after development
//console.log('Listening server at port 5000...')

export default app;