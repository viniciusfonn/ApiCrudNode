const express = require('express');
const routes = express.Router();

const UserController = require('./controller/UserController');

routes.get('/users/', UserController.index);

routes.get('/users/:id', UserController.show);

routes.put('/users/:id',UserController.update);
routes.post('/users',UserController.store);
routes.delete('/users/:id',UserController.delete);


module.exports = routes;