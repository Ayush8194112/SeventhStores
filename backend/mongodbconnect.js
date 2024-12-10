import mongoose from "mongoose";
const pass = "Bhawishya11";
const collection_name = "ecom2";
const uri = `mongodb+srv://Bhawishyasingh:${pass}@cluster0.qxhqyuf.mongodb.net/${collection_name}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri, {
    
})


const registerschema=new mongoose.Schema({
    name:String,
    password:String,
    email:String
})
export {registerschema}

const loginschema=new mongoose.Schema({
    
    password:String,
    email:String
})
export {loginschema}


