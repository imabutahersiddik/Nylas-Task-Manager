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

module.exports = { sendSlackNotification };
