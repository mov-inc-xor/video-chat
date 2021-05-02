import express from 'express'
import bodyParser from 'body-parser'
import router from './router.js'
import {listen} from "./sockets.js"

const port = process.env.PORT || 5000

const app = express()

app.use(bodyParser.json())
app.use('/api', router)

const server = listen(app)

server.listen(port, () => {
  console.log('Server is listening on port ' + port)
})