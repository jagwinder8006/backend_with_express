const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from root index.js on Vercel!');
});

app.get('/twitter', (req, res) => {
  res.send('<h1>Hello from /twitter route!</h1>');
});

module.exports = app;
module.exports.handler = serverless(app);

