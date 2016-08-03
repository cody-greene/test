'use strict'
const http = require('http')
http.createServer()
.on('request', function (req, res) {
  res.sendStatus(501)
})
.listen(process.env.PORT)
