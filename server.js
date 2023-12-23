// server.js
const express = require('express');
const app = express();
const port = 3000; // You can choose any port

app.get('/hello', (req, res) => {
  const file = `${__dirname}/hello.txt`;
  res.download(file); // Set the path and filename to be downloaded.
});

app.get('/worldhello', (req, res) => {
  const file = `${__dirname}/worldhello.txt`;
  res.download(file); // Set the path and filename to be downloaded.
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
