const express = require('express');
const { handleTaskCreation, getAnalytics } = require('../controllers/taskController');

const router = express.Router();

// Define the route for creating tasks
router.post('/create-tasks', handleTaskCreation);

// Define the route for fetching analytics
router.get('/analytics', getAnalytics);

module.exports = router;