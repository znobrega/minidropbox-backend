const mongoose = require('mongoose')

const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    // Id of files
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }]
}, {
    // Created at and Updated at in each registry
    timestamps: true
})

module.exports = mongoose.model('Box', Box)