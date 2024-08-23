const { parseMeetingNotes } = require('./noteParser');
const { createTaskInTool } = require('./taskManager');
const { sendSlackNotification } = require('../api/slackService');
const { sendTeamsNotification } = require('../api/teamsService');

async function handleTaskCreation(req, res) {
    try {
        const { meetingNotes } = req.body;
        const actionItems = await parseMeetingNotes(meetingNotes);
        await createTaskInTool(actionItems);

        // Notify via Slack and Teams
        const message = `New tasks created: ${actionItems.map(item => item.title).join(', ')}`;
        await sendSlackNotification(message);
        await sendTeamsNotification(message);

        res.status(201).send({ message: 'Tasks created successfully!' });
    } catch (error) {
        console.error('Error creating tasks:', error);
        res.status(500).send({ error: 'Failed to create tasks' });
    }
}

module.exports = { handleTaskCreation };
