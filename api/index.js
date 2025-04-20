// api/index.js
const express = require('express');
const app = express();
const serverless = require('serverless-http');

app.get('/', (req, res) => {
  res.send('Hello World! from Vercel');
});

app.get('/twitter', (req, res) => {
  res.send('<h1>Hello ji, doston ki haal chaal</h1>');
});

module.exports = app;
module.exports.handler = serverless(app);
