import fs from 'fs';
import { Request, Response, NextFunction } from 'express';
import { verifyPassword } from '../helpers/hash.helper';
import { ITERATIONS } from '../constants/hash.constants';

const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

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
  
  User.findByEmail(req.body.user, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(200).send('Senha ou usuário inválido!');
      } else {
        return res.status(401).send('Login inválido!');    
      }
    } else {
        verifyPassword({
          salt: data.salt,
          iterations: ITERATIONS,
          hash: data.hash
        }, req.body.pwd).then(
          re => {
              if (re) { 
                //auth ok 
                const id = data.id; 
                var privateKey  = fs.readFileSync('./private.key', 'utf8');
                var token = jwt.sign({ id }, privateKey, { 
                  expiresIn: 43200, // 12h 
                  algorithm:  'RS256' //SHA-256 hash signature
                }); 
                
                console.log('Fez login e gerou token!');
                return res.status(200).send({ auth: true, token: token, id: id, name: data.name, email: data.email }); 
              }
            
              return res.status(401).send('Login inválido!'); 
          }
        )
    } 
  });

};

exports.logout = (
  req: Request,
  res: Response
) => { 
  console.log('Logged out and JWT cancelled');
  return res.status(200).send({ auth: false, token: null }); 
}
