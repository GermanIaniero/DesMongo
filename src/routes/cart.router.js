import { Router } from 'express'
import cartModel from "../DAO/mongoManager/models/cartModel.js";

const router = Router()
//const cartManager = new CartManager()

router.get('/', async (req, res) => {
   // const result = await cartManager.list()
    //res.send(result)
    const carts = await cartModel.find().lean().exec()
    console.log(carts)
    res.render('cart', { carts }) 
})

router.post('/', async (req, res) => {
    const result = await cartModel.create()
    res.send(result)
}) 

export default router

/*router.get('/:idc/:idp', async (req, res) => {
    const idc = parseInt(req.params.idc)
    const idp = parseInt(req.params.idp)

    const result = await cartManager.addProduct(idc, idp)
    res.send(result)
}) */

