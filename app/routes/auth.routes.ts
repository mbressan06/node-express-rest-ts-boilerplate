module.exports = app => {
  const auth = require('../controllers/auth.controller.ts');

  // Create a new User
  app.post('/login', auth.login);

  // Retrieve all Users
  app.post('/logout', auth.logout);

  // Retrieve a single User with userId
  // app.get('/users/:userId', auth.findOne);
};