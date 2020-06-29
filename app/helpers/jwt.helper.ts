import fs from 'fs';
import { Request, Response, NextFunction } from 'express';

const jwt = require('jsonwebtoken');

export function verifyJWT (
  req: Request,
  res: Response,
  next: NextFunction
) { 
  var token = req.headers['x-access-token']; 
  if (!token) 
    return res.status(401).send({ auth: false, message: 'No Token, no data.' }); 
  
  var publicKey  = fs.readFileSync('./public.key', 'utf8');
  jwt.verify(token, publicKey, {algorithm: ['RS256']}, function(err: any, decoded: { id: string; }) { 
    if (err) 
      return res.status(500).send({ auth: false, message: 'Invalid Token.' }); 
    
    req.body.id = decoded.id; 
    console.log('User Id: ' + decoded.id)
    next(); 
  }); 
}