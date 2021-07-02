const express = require('express')
const app  = express()


app.use(express.json())

app.use("/things", require("./routes/thingRouter.js"))


app.listen(8000, () => {
    console.log("The server is runnign on port 8000.")
})