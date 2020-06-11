const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(require('./routes/index.js'))

app.set('port', process.env.PORT || 8080)
app.listen(app.get('port'), () => {
  console.log(`❤️ PORT: ${app.get("port")} 🤑`)
})
