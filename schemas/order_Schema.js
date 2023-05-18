const Joi = require('joi')


const customerId = Joi.number().integer()
const id = Joi.number().integer()
const orderId = Joi.number().integer()
const productId = Joi.number().integer()
const amount = Joi.number().integer().min(1)

const getOrderSchema = Joi.object({
    id: id.required()
})

const postOrderSchema = Joi.object({
    customerId:customerId.required()
})

const addItemSchema = Joi.object({

    orderId: orderId.required(),
    productId: productId.required(),
    amount: amount.required()

})

const updateOrderSchema = Joi.object({
    id:id,
    customerId:customerId
})



module.exports =  {postOrderSchema, updateOrderSchema, getOrderSchema, addItemSchema}