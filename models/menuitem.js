const mongoose=require('mongoose');
const menuitemschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
         type:String,
         required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    }

})

const menuitem =mongoose.model('menuitem',menuitemschema);
module.exports=menuitem;