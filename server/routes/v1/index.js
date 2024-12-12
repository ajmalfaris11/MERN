const v1Router = require('express').Router();
const { userProfile } = require('../../controllers/userControllers');
// Import individual route files
const productRouter = require('./productRouter');
const userRoutes = require('./userRoutes');

v1Router.use('/user', userRoutes);
v1Router.use('/product', productRouter);
v1Router.use('/user-profile', userProfile);


module.exports = v1Router;