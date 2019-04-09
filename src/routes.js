const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

const routes = express.Router();

const BoxController = require('./controllers/BoxController')
const FileController = require('./controllers/FileController')

routes.post('/boxes', BoxController.store)

// Upload One File at time, name file.
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store)
routes.get('/boxes/:id', BoxController.show)

routes.get('/', (req, res) => {
    return res.send("AAAAAAA")
})

module.exports = routes