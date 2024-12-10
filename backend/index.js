import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { registerschema, loginschema } from "./mongodbconnect.js";

const app = express();
const pass = "Bhawishya11";
const collection_name = "ecom2";
const uri = `mongodb+srv://Bhawishyasingh:${pass}@cluster0.qxhqyuf.mongodb.net/${collection_name}?retryWrites=true&w=majority&appName=Cluster0`;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const productSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String },
    category: { type: String },
    image: { type: String },
    new_price: { type: String },
    old_price: { type: String },
});

const getModel = (name, schema) => {
    if (mongoose.models[name]) {
        return mongoose.model(name);
    } else {
        return mongoose.model(name, schema);
    }
};

app.get("/", (req, res) => {
    console.log("hii");
    res.send("yes");
});

app.post("/get_data_base", async (req, res) => {
    console.log(req.body.data);
    const { data } = req.body;

    try {
        const Product = getModel("Product_data", productSchema);
        const res_data = await Product.find({ category: data });

        res.send(res_data);
    } catch (error) {
        res.send(false);
    }
});

app.post("/register", async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const Register = getModel("register", registerschema);
        let data = new Register({
            name: name,
            email: email,
            password: password,
        });

        let save = await data.save();
        res.send(true);
    } catch (error) {
        res.send(false);
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const Register = getModel("register", loginschema);

    try {
        let resp = await Register.findOne({ email, password });
        console.log(resp);
        if (resp && resp.email === email && resp.password === password) {
            res.send(true);
        } else {
            res.send(false);
        }
    } catch (error) {
        res.send(false);
    }
});

app.listen(8000, () => {
    console.log("connected");
});
