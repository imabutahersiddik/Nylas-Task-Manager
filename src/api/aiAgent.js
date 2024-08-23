const axios = require('axios');

async function callAIModel(notes) {
    try {
        const response = await axios.post(process.env.AI_MODEL_ENDPOINT, { notes });
        return response.data.actionItems;
    } catch (error) {
        console.error('Error calling AI model:', error);
        throw new Error('AI model call failed');
    }
}

module.exports = { callAIModel };
