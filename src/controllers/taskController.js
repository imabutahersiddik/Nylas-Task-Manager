const { parseMeetingNotes } = require('../services/noteParser');
const { createTaskInTool } = require('../api/taskService');
const { sendSlackNotification, sendTeamsNotification } = require('../api/notificationService');
const { getTaskCompletionRate, getProductivityTrends } = require('../services/analyticsService');

async function handleTaskCreation(req, res) {
    try {
        const { meetingNotes, assignedUsers } = req.body; // Added assignedUsers
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

async function getAnalytics(req, res) {
    try {
        const completionRate = getTaskCompletionRate();
        const trends = getProductivityTrends();

        res.status(200).send({
            completionRate,
            trends,
        });
    } catch (error) {
        console.error('Error fetching analytics:', error);
        res.status(500).send({ error: 'Failed to fetch analytics' });
    }
}

module.exports = { handleTaskCreation, getAnalytics };
