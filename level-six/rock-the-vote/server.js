const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')


app.use(express.json())
app.use(morgan('dev'))


mongoose.connect('mongodb+srv://hopkins199:6uhdrZaOG7MUPr9L@cluster0.idyh5.mongodb.net/rtvDB?retryWrites=true&w=majority',
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
app.use('/api/issues/authors', require('./routes/authorRouter.js'))
app.use('/api/issues', require('./routes/issueRouter.js'))
app.use('/api/issues/comments/', require('./routes/commentRouter'))


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})


app.listen(8000, () => {
    console.log('Server is running on local port 8000')
})