const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! from Vercel');
});



// Export the app and a serverless handler
module.exports = app;
module.exports.handler = serverless(app);
