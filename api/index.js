const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! from Vercel');
});

app.get('/twitter', (req, res) => {
  res.send('<h1>Hello ji, doston ki haal chaal</h1>');
});

// Export the app and a serverless handler
module.exports = app;
module.exports.handler = serverless(app);
