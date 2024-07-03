const express = require('express');
const router = express.Router();

const { testServer } = require('../controllers/auth');

router.route('/testServer').get(testServer);

module.exports = router;