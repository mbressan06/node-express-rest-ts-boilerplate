import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'; 
import cors from 'cors';
import express, { Application } from 'express';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
  }

  private setConfig() {
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); 
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(cookieParser()); 
    this.app.use(cors());

    require('./routes/auth.routes')(this.app);
    require('./routes/product.routes')(this.app);
    require('./routes/user.routes')(this.app);
  }
}

export default new App().app;
