const mongoose = require('mongoose')

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})


// So existe no backend
// sempre que json e object
// create 'url' on db
File.virtual('url').get(function() {
    const url = process.env.URL || 'http://localhost:3000'

    // Transform the url
    return `${url}/files/${encodeURIComponent(this.path)}`
})

module.exports = mongoose.model("File", File)