import mongoose from 'mongoose'

const productCollection = 'products'

const productSchema = new mongoose.Schema({
    id: Number,
    title:String,   
    description:String,
    price: Number,
    thumbnail:Array,
    code:Number,
    stock:Number,
    status:Boolean,
    category:String,
    //Investigar requerido por defecto mongoose en js
})


const productModel = mongoose.model(productCollection, productSchema)

export default productModel