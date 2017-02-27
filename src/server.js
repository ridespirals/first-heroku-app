const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static(__dirname + '/'))

app.get('/', (req, res) =>  {
    res.send('Hello World! Get over it!')
})

app.listen(app.get('port'), () => {
    console.log(`App is running on port ${app.get('port')}`)
})

