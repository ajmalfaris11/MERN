const apiRoutes = require("express").Router();

// Import v1 routes
const v1Routes = require('./v1');
const v2Router = require("./v2");


// Use v1 routes under the `/api/v1` path
apiRoutes.use('/v1', v1Routes);
// Use v2 routes under the `/api/v2` path
apiRoutes.use('/v2', v2Router)

module.exports = apiRoutes;