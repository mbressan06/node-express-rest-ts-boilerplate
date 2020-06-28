import { verifyJWT } from '../controllers/jwt.controller';

module.exports = app => {
  const products = require('../controllers/product.controller.ts');

  // Create a new User
  app.post('/products', verifyJWT, products.create);

  // Retrieve all Users
  app.get('/products', verifyJWT, products.findAll);

  // Retrieve a single User with userId
  app.get('/products/:userId', verifyJWT, products.findOne);

  // Update a User with userId
  app.put('/products/:userId', verifyJWT, products.update);

  // Delete a User with userId
  app.delete('/products/:userId', verifyJWT, products.deleteProduct);

  // Create a new User
  app.delete('/products', verifyJWT, products.deleteAll);
};