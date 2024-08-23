const axios = require('axios');

async function createCalendarEvent(task) {
    try {
        await axios.post(`${process.env.NYLAS_API_URL}/events`, {
            title: task.title,
            description: task.description,
            start_time: task.dueDate,
            end_time: new Date(new Date(task.dueDate).getTime() + 60 * 60 * 1000).toISOString(), // 1 hour later
        });
    } catch (error) {
        console.error('Error creating calendar event:', error);
    }
}

module.exports = { createCalendarEvent };
