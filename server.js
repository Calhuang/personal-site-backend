const express = require("express")
const http = require("http")
const socketIo = require("socket.io")
const axios = require("axios")
const port = process.env.PORT || 4001
const index = require("./routes/index")
const app = express()

app.use(index)

const server = http.createServer(app)

const io = socketIo(server)

io.on('connection', socket => {
  console.log('Client connected')
  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened:', err)
  }
  console.log(`server is listening on ${port}`)
})