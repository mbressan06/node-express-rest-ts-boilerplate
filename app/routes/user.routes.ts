import { verifyJWT } from '../controllers/jwt.controller';

module.exports = app => {
  const users = require('../controllers/user.controller.ts');

  // Create a new User
  app.post('/users', users.create);

  // Retrieve all Users
  app.get('/users', verifyJWT, users.findAll);

  // Retrieve a single User with userId
  app.get('/users/:userId', verifyJWT, users.findOne);

  // Update a User with userId
  app.put('/users/:userId', verifyJWT, users.update);

  // Delete a User with userId
  app.delete('/users/:userId', verifyJWT, users.deleteUser);

  // Delete all Users
  app.delete('/users', users.deleteAll);
};