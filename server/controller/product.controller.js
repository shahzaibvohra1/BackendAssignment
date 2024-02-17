import { json } from 'express'
import Product from '../model/product.model.js'


const getAll = async (req, res) => {

    let result

    try{
        let query = req.query
        console.log(query)
        if(query.name)
        {
            result = await Product.find({name:query.name})
        }
        else{
            result = await Product.find()
        }
        
        
        return res.status(200).json(result)
    }
    catch(err)
    {
        return res.status(400).json({
            message: err.message
        })
    }
}

const productById = async (req, res, next,id) => {
    let result
    try{
        
        result = await Product.findById(id)
        
    }
    catch(err)
    {
        return res.status(400).json({
            message: err.message
        })
    }

    req.Product = result
    next()
}

const getbyId = async (req, res,next) => {

    res.json(req.Product)
}

const create = async (req, res) => {
    const product = new Product(req.body)

    try{
        await product.save()

        return res.status(200).json({
            message: "Success fully added the product"
        })
    }
    catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
}


const updateProduct = async (req,res) => {

    let product = req.Product
    let updates = req.body
    try{
        
        product.name = updates.name
        product.description = updates.description
        product.price = updates.price
        product.quantity = updates.quantity
        product.category = updates.category

        await product.save()

        res.status(200).json(product)
    }
    catch(err){
        res.status(400).json(err.message)
    }
}

const deletebyId = async (req, res) => {
    let Product = req.Product
    try{
        

        let deletedProd = await Product.deleteOne()

        res.status(200).json(deletedProd)
    }
    catch(err){
        res.status(400).json(err.message)
    }
}

const deleteAll = async (req,res) => {
    try{
        
        let deletedProd = await Product.deleteMany()

        res.status(200).json(deletedProd)
    }
    catch(err){
        res.status(400).json(err.message)
    }
}

const getByName = async (req,res) => {
    res.json(req)
}

 export default {getAll, create, getbyId, updateProduct, deleteAll, deletebyId,getByName,productById}