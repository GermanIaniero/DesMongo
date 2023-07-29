import cartModel from "../models/cartModel.js";
export default class CartDbManager{
    constructor() {
        /*getById = async (id) => {   
        }   
    */
    }
    getCart = async () => {
        return await cartModel.find();  
    }

    setCart = async (cart) => {
        return await cartModel.create(cart);
    }
}