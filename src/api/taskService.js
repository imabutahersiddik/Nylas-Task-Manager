const axios = require('axios');
const { createCalendarEvent } = require('./calendarService');

async function createTaskInTool(actionItems) {
    // Iterate over each action item
    for (const item of actionItems) {
        try {
            // Create a task in the task management tool using the Axios library
            const response = await axios.post(process.env.TASK_API_ENDPOINT, {
                title: item.title,
                description: item.description,
                dueDate: item.dueDate,
            });

            // Check if the task creation was successful
            if (response.status === 201) {
                console.log(`Task created: ${item.title}`);
            } else {
                console.error(`Failed to create task: ${item.title}`);
            }

            // Create a calendar event for the task using the createCalendarEvent function
            await createCalendarEvent(item);
        } catch (error) {
            console.error(`Error creating task: ${item.title}`, error);
        }
    }
}

module.exports = { createTaskInTool };