import { Router } from "express";
//import ProductManager from '../manager/product.manager.js'
import productModel from "../DAO/mongoManager/models/productModel.js";
import chatModel from "../DAO/mongoManager/models/modelMessage.js"

const router = Router()
//const productManager = new ProductManager()

router.get('/', async (req, res) => {
    const products = await productModel.find().lean().exec()
    res.render('home', { products })
})

router.get('/realTimeProducts', async (req, res) => {
    const products = await productModel.find().lean().exec()
    res.render('realTimeProducts', { products })
})

router.get('/form-products', async (req, res) => {
    res.render('form', {})
})

router.get('/chat', async (req, res) => {
    //res.render('chat', {}) // 

    const chat = await chatModel.find().lean().exec()
    res.render('chat', { chat })
})

router.post('/form-products', async (req, res) => {
    const data = req.body
    const result = await productModel.create(data)

    res.redirect('/')
}) 

router.post('/chat', async (req, res) => {
    const data = req.body
    const result = await chatModel.create(data)
    res.send(result)
}) 

export default router