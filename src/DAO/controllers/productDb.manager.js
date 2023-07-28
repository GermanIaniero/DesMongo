import productModel from "../models/productModel.js";




export default class ProductDbManager{

   
    
    constructor() {

        
    
        /*getById = async (id) => {
            
        }
    
        
    */
    }
    getProducts = async () => {
        return await productModel.find();  
    }

    setProduct = async (product) => {
        return await productModel.create(product);
    }
}