const express = require('express');
const {getAllClients} = require('../Controllers/client_controller');

const router = express.Router();

router.get('/', getAllClients);

module.exports = router;