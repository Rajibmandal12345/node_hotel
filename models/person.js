const mongoose=require('mongoose');

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
           type:String,
           required:true,
           unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    adress:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }

})

//create person model
const Person =mongoose.model('person',personSchema);
module.exports=Person;