import crypto from 'crypto';
import type {
  Request,
  Response,
  NextFunction
} from 'express';

const Product = require("../models/product.model.ts");

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

  // Create a Product
  const product = new Product({
    name: req.body.name,	
    description: req.body.description,	
    category: req.body.category,	
    price: req.body.price,	
    stock: req.body.stock
  });
 
  // Save Product in the database
  Product.create(product, (err, data): void => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    else res.send(data);
  });

};

export const findAll = async (
  req: Request,
  res: Response
): Promise<void> => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    else res.send(data);
  });
};

export const findOne = async (
  req: Request,
  res: Response
): Promise<void> => {
  Product.findById(req.params.productId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.productId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Product with id " + req.params.productId
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
 
  Product.updateById(
    req.params.productId,
    new Product(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Product with id ${req.params.productId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Product with id " + req.params.productId
          });
        }
      } else res.send(data);
    }
  );
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  Product.remove(req.params.productId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.productId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Product with id " + req.params.productId
        });
      }
    } else res.send({ message: `Product was deleted successfully!` });
  });
};

export const deleteAll = async (
  req: Request,
  res: Response
): Promise<void> => {
  Product.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all products."
      });
    else res.send({ message: `All Products were deleted successfully!` });
  });
};
