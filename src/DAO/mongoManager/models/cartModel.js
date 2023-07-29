import mongoose from "mongoose";

const cartCollection = 'cart'

const cartSchema = new mongoose.Schema({
            id: Number,
            products: 
            [{id:number, quantity: number}]
})

const cartModel = mongoose.model(cartCollection, cartSchema)

export default cartModel
