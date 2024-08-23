// Configuration file for environment variables
require('dotenv').config();

module.exports = {
    nylasClientId: process.env.NYLAS_CLIENT_ID,
    nylasClientSecret: process.env.NYLAS_CLIENT_SECRET,
    aiModelEndpoint: process.env.AI_MODEL_ENDPOINT,
    taskApiEndpoint: process.env.TASK_API_ENDPOINT,
    slackWebhookUrl: process.env.SLACK_WEBHOOK_URL,
    teamsWebhookUrl: process.env.TEAMS_WEBHOOK_URL,
    nylasApiUrl: process.env.NYLAS_API_URL,
    port: process.env.PORT || 3000,
};
