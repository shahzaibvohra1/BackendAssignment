import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:"Name is required" 
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    category:{
        type:String
    }

})

export default mongoose.model('Products', productSchema)