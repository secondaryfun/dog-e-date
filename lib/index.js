const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(require('./routes/index.js'))

// app.get('/', (req, res) => {
//   res.send("Hellloooo")
// })


app.listen(3000, () => console.log('app listening on port 3000'))
