const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
// const { MongoClient} = require('mongodb')

app.use(express.json())
app.use(morgan('dev'))

// Connect to database
mongoose.connect('mongodb+srv://hopkins199:LbFXpijM7aci6oES@cluster0.idyh5.mongodb.net/bountydb?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

app.use("/bounties", require("./routes/bountyRouter.js"))

app.use((err, req, res, next) => {
     console.log(err)
return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on port 9000")
})