const mongoose=require('mongoose');
const mongooseurl=  'mongodb://localhost:27017/hotel';//hotel is the database name
mongoose.connect(mongooseurl,{
    useNewUrlParser: true, // Correct spelling
    useUnifiedTopology: true
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("database server connected");
})
db.on('disconnected',()=>{
    console.log("server disconnected");
})
db.on('error',(err)=>{
    console.log("mongodb connection error",err);
})

module.exports=db;