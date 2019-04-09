const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
// const socket = require('socket.io')
// const http = require('http')

const app = express()
// Allow anyone access from any directory
app.use(cors())

// const server = http.Server(app)
// const io = socket(server)
//OR
const server = require('http').Server(app)
const io = require('socket.io')(server)

const PORT = process.env.PORT || 3000

// Routes?
io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box)
    })
})

mongoose.connect('mongodb+srv://znobrega:carlos123@cluster0-mvw3u.mongodb.net/zdrop?retryWrites=true',
{
    useNewUrlParser: true
})

// *** MIDDLEWARES ***
app.use((req, res, next) => {
    // All routes will access req.io as io
    req.io = io

    return next()
})

// Understand JSON
app.use(express.json())
// Work with Files
app.use(express.urlencoded( {extended: true }))
// Routes
app.use(require('./routes'))
// When access router files, the files will load(?)
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

server.listen(PORT, () => {
    console.log(`Working on port: ${PORT}`);
})

// MongoDB Atlas
// Db on cloud, cool