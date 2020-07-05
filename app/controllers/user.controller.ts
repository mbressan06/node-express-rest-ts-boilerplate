import type {
  Request,
  Response,
  NextFunction
} from 'express';
import bcrypt from 'bcryptjs';
import { generateHashPassword } from '../helpers/hash.helper';

const User = require("../models/user.model.ts");

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  generateHashPassword(req.body.password).then(
    password => {
      // Create a User
      const user = new User({
        email: req.body.email,
        name: req.body.name,
        active: 1,
        hash: password.hash,
        salt: password.salt
      });
     
      // Save User in the database
      User.create(user, (err, data): void => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        else res.send(data);
      });
    }
  );
  

};

export const findAll = async (
  req: Request,
  res: Response
): Promise<void> => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};

export const findOne = async (
  req: Request,
  res: Response
): Promise<void> => {
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.userId
        });
      }
    } else res.send(data);
  });
};

export const update = async (
  req: Request,
  res: Response
): Promise<void> => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
 
  User.updateById(
    req.params.userId,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.userId
          });
        }
      } else res.send(data);
    }
  );
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  User.remove(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.userId
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

export const deleteAll = async (
  req: Request,
  res: Response
): Promise<void> => {
  User.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    else res.send({ message: `All Users were deleted successfully!` });
  });
};
