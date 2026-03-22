const express = require('express');
const {getAllClients, addClients} = require('../Controllers/client_controller');

const router = express.Router();

router.get('/', getAllClients);
router.post('/add', addClients);

module.exports = router;