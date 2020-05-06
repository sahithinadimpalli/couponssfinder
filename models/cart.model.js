const mongoose=require('mongoose');
const cartSchema=mongoose.Schema({
    id:{
        type:Number
        
    },
    name:{
        type:String
        
    },
  
    price:{
        type:Number
        
    },
    imageurl:{
        type:String
    },
   
    
})
const Cart=module.exports=mongoose.model('Cart',cartSchema)