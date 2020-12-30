const express = require('express');
const router = express.Router();

const telegramController = require('../controllers/telegramController');

//================================= ROUTES ==================================
router.get('/', telegramController.get);
router.post('/', telegramController.post);

module.exports = router;
