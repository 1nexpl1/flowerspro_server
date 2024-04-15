const uuid = require('uuid');
const path = require('path');
const { Post } = require('../models/models')
const ApiError = require('../error/ApiError');

class PostController {
    async create(req, res) {
        try {
            const { title, color, description } = req.body
            const { imgs1, imgs2 } = req.files
            let fileName = uuid.v4() + ".jpg"
            let fileName1 = uuid.v4() + ".jpg"
            imgs1.mv(path.resolve(__dirname, '..', 'static', fileName))
            imgs2.mv(path.resolve(__dirname, '..', 'static', fileName1))
            const post = await Post.create({ title, color, description, imgs1: fileName, imgs2: fileName1 })
            return res.json(post)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const post = await Post.findAll()
        return res.json(post)
    }
    async deleteOne(req, res) {
        const { id } = req.params
        const post = await Post.destroy(
            {
                where: { id: id }
            }
        )
        return res.json(post)
    }

}

module.exports = new PostController()