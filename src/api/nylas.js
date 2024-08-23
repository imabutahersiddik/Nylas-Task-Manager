const Nylas = require('nylas');

function initializeNylas() {
    Nylas.config({
        clientId: process.env.NYLAS_CLIENT_ID,
        clientSecret: process.env.NYLAS_CLIENT_SECRET,
    });
}

module.exports = { initializeNylas };
