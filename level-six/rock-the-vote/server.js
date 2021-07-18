const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb+srv://hopkins199:zTbSyC3EZ2tfOudk@cluster0.idyh5.mongodb.net/rvtDB?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to the db')
)

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['shal1', 'RS256', 'HS256']}))
app.use('/api/issues', require('./routes/issueRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})


app.listen(9000, () => {
    console.log('Server is running on local port 9000')
})