const express = require('express')
const app = express()

app.use(express.json())

app.use("/items", (req, res, next) => {
    console.log("Middleware was executed")
    next()
})

app.use((req, res, next) => {
    req.body = { name: "Mike Honcho" }
    next()
})

app.get("/items", (req, res, next) => {
    console.log("Get request received")
    res.send(req.body)
})

app.listen(8000, () => {
    console.log("The server is running on port 8000.")
})