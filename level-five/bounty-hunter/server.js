const express = require('express')
const app = express()
const morgan = require('morgan')


app.use(express.json())
app.use(morgan('dev'))

app.use("/bounties", require("./routes/bountyRouter.js"))

// app.use((err, req, res, next) => {
//     console.log(err)
// })

app.listen(8000, () => {
    console.log("The server is running on port 8000")
})