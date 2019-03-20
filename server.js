const express = require("express")
const http = require("http")
const port = process.env.PORT || 5000
const index = require("./routes/index")
const app = express()

app.use(index)

const server = http.createServer(app)

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened:', err)
  }
  console.log(`server is listening on ${port}`)
})