const express = require('express');
const router = express.Router();

// Import individual route files
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;