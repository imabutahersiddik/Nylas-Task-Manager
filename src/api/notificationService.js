const axios = require('axios');

async function sendSlackNotification(message) {
    try {
        await axios.post(process.env.SLACK_WEBHOOK_URL, {
            text: message,
        });
    } catch (error) {
        console.error('Error sending Slack notification:', error);
    }
}

async function sendTeamsNotification(message) {
    try {
        await axios.post(process.env.TEAMS_WEBHOOK_URL, {
            text: message,
        });
    } catch (error) {
        console.error('Error sending Teams notification:', error);
    }
}

module.exports = { sendSlackNotification, sendTeamsNotification };
