const app = require('express')();

app.get('/api/hello_world', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`Hello World!`);
});

module.exports = app;
