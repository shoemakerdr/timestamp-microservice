const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('You\'ve reached the timestamp microservice homepage.')
})

app.listen(8000, () => {
    console.log('You\'re listening on port 8000.\n\n\tGo to http://localhost:8000')
})
