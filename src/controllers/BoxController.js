const Box = require('../models/Box')

class BoxController {
    async store(req, res) {
        
        console.log(req.body)
        const box = await Box.create({ title: req.body.title })

        return res.json(box)
    }

    async show(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            // Ordenando de forma decrescente
            options: { sort: { createdAt: -1 }  }
        })

        return res.json(box)
    }
}

// Returning a object
module.exports = new BoxController()