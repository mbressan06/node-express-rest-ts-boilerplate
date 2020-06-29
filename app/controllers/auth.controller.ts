import fs from 'fs';
import { Request, Response, NextFunction } from 'express';

const jwt = require('jsonwebtoken');

const User = require("../models/user.model.ts");

exports.login = (
  req: Request,
  res: Response,
  next: NextFunction
) => { 
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
 
  if (req.body.user === 'luiz' && req.body.pwd === '123') { 
    //auth ok 
    const id = 1; //esse id viria do banco de dados 
    var privateKey  = fs.readFileSync('./private.key', 'utf8');
    var token = jwt.sign({ id }, privateKey, { 
      expiresIn: 43200, // 12h 
      algorithm:  'RS256' //SHA-256 hash signature
    }); 
    
    console.log('Fez login e gerou token!');
    return res.status(200).send({ auth: true, token: token }); 
  }

  return res.status(401).send('Login inválido!'); 
};

exports.logout = (
  req: Request,
  res: Response
) => { 
  console.log('Logged out and JWT cancelled');
  return res.status(200).send({ auth: false, token: null }); 
}

