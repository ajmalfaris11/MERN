const express = require("express");
const router = express().Router();

// Import v1 routes
const v1Routes = require('./v1');


// Use v1 routes under the `/api/v1` path
router.use('/api/v1', v1Routes);

module.exports = router;