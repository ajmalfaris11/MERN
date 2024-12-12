const v1Router = require('express').Router();
// Import individual route files
const productRouter = require('./productRouter');
const userRoutes = require('./userRoutes');

v1Router.use('/user', userRoutes);
v1Router.use('/product', productRouter);

module.exports = v1Router;