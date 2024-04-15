const uuid = require('uuid');
const path = require('path');
const {Storie} = require('../models/models')
const ApiError = require('../error/ApiError');

class StorieController {
    async create(req, res) {
        try {
            const { name } = req.body
            const { imgSmall, imgMain } = req.files
            let fileName = uuid.v4() + ".jpg"
            let fileName1 = uuid.v4() + ".jpg"
            imgSmall.mv(path.resolve(__dirname, '..', 'static', fileName))
            imgMain.mv(path.resolve(__dirname, '..', 'static', fileName1))
            const storie = await Storie.create({ name, imgSmall: fileName, imgMain: fileName1 })
            return res.json(storie)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const storie = await Storie.findAll()
        return res.json(storie)
    }
    async deleteOne(req, res) {
        const {id} = req.params
        const storie = await Storie.destroy(
            {
                where: {id: id}
            }            
        )        
        return res.json(storie)
    }

}

module.exports = new StorieController()