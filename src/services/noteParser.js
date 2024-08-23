const { callAIModel } = require('../api/aiAgent');

async function parseMeetingNotes(notes) {
    const actionItems = await callAIModel(notes);
    return actionItems;
}

module.exports = { parseMeetingNotes };
