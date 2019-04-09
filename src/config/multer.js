// File manager
const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
    //resolve padroniza os diretorios
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve(__dirname, '..', '..', 'tmp'))
        },
        filename: (req, file, callback) => {
            // Generate random key 16 bits
            crypto.randomBytes(16, (err, hash) => {
                if (err) {
                    callback(err)
                }
                //kJLKASJD23_AIJDO21-test.jpg
                file.key = `${hash.toString('hex')}-${file.originalname}`

                callback(null, file.key)
            })
        }
    })
}