const {Order} = require('../models/models')

class OrderController {
    async create(req, res) {
        try {            
            let {adress, name, number, value, status, userId} = req.body
            const order = await Order.create({adress, name, number, value, status, userId});           
            return res.json(order)
        } catch (e) {
            next(ApiError.badRequest(e.message))           
        }
    }
    async getAll(req, res) {
        let orders = await Order.findAll()
        return res.json(orders)
    }
    async getAllPersonal(req, res) {        
        let {UserId} = req.query
        let orders = Order.findAndCountAll({where:{UserId}})
        return res.json(orders)
    }
    async deleteOne(req, res) {
        const {id} = req.params
        const type = await Type.destroy(
            {
                where: {id: id}
            }            
        )        
        return res.json(type)
    }

}

module.exports = new OrderController()