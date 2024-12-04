const v2Router = require('express').Router();
const productRouter = require('./productRouter.js');


v2Router.use('/product', productRouter);

module.exports = v2Router;