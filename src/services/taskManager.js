const axios = require('axios');
const { createCalendarEvent } = require('../api/calendarService');

async function createTaskInTool(actionItems) {
    for (const item of actionItems) {
        await axios.post(process.env.TASK_API_ENDPOINT, {
            title: item.title,
            description: item.description,
            dueDate: item.dueDate,
        });

        // Create a calendar event for the task
        await createCalendarEvent(item);
    }
}

module.exports = { createTaskInTool };
