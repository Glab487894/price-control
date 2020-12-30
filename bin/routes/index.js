// add modules
const express = require('express');
// creating router
const router = express.Router();

// fork
router.use('/telegram/user/input', require('./telegramFork'))

// exports
module.exports = router;