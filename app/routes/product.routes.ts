import { verifyJWT } from '../helpers/jwt.helper';

module.exports = app => {
  const products = require('../controllers/product.controller.ts');

  // Create a new User
  app.post('/products', verifyJWT, products.create);

  // Retrieve all Users
  app.get('/products', verifyJWT, products.findAll);

  // Retrieve a single User with userId
  app.get('/products/:productId', verifyJWT, products.findOne);

  // Update a User with userId
  app.put('/products/:productId', verifyJWT, products.update);

  // Delete a User with userId
  app.delete('/products/:productId', verifyJWT, products.deleteProduct);

  // Create a new User
  app.delete('/products', verifyJWT, products.deleteAll);
};
