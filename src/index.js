require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { initializeNylas } = require('./api/nylas');
const { handleTaskCreation } = require('./services/taskService');

const app = express();
app.use(express.json());
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

initializeNylas();

// Routes
app.post('/create-tasks', handleTaskCreation);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
