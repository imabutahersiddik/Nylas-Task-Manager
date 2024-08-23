const { sendSlackNotification, sendTeamsNotification } = require('../api/notificationService');

async function collectUserFeedback(feedback) {
    try {
        // Send a notification to Slack
        await sendSlackNotification(`New user feedback received: ${feedback}`);

        // Send a notification to Microsoft Teams
        await sendTeamsNotification(`New user feedback received: ${feedback}`);

        // Logic to store user feedback for future improvements
        console.log('User feedback received:', feedback);
    } catch (error) {
        console.error('Error collecting user feedback:', error);
    }
}

module.exports = { collectUserFeedback };