const app = require('express')()

app.get('/hello_world', (req, res) => {
  res.end(`Hello, World!`)
})

module.exports = app