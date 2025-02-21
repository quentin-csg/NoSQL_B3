const express = require('express');
const router = express.Router();
const profilesRouter = require('./api/profiles/index');

router.use('/profiles', profilesRouter);

module.exports = router;