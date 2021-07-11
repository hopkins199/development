const express = require('express')
const app = express()
const morgan  = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))


mongoose.connect("mongodb+srv://hopkins199:L7jbvT67jMA1v7aj@cluster0.idyh5.mongodb.net/crudstoredb?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

app.use("/inventory", require("./routes/inventoryRouter.js"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log("The server is running on port 9000")
})