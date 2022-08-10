require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

const booksController = require('./controller/book_controller.js')
app.use('/books', booksController)

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(process.env.PORT)