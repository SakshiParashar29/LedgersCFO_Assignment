const express = require('express');
const {createTask, getTasks, updateTask} = require('../Controllers/task_controller');

const router = express.Router();

router.post('/', createTask);
router.get('/:clientId', getTasks);
router.patch('/:id', updateTask);

module.exports = router;