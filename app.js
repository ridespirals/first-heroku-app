const express = require('express')
const app = express()
const path = require('path')

app.set('port', (process.env.PORT || 5000))

app.use(express.static(`${__dirname}/build/`))

app.get('*', (req, res) =>  {
    res.sendFile(`${__dirname}/build/index.html`)
})

module.exports = app
