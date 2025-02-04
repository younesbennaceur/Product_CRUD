import express from "express";
import dotenv from "dotenv";
import { ENV } from "./config/secrets.js";
import { connectDB } from "./config/db.js";
import { Product } from "./models/product.model.js";
const app = express();

await connectDB(ENV.MONGO_URI);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/products", async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res.status(404).json({
      success: false,
      message: "please provide all fields",
    });
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      message: "product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log(`error in creating product : ${error}`);
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try{
    await Product.findByIdAndDelete(id);
    res.status(201).json({
      success : true ,
      message : "product deleted successfully"
    })

  }catch(error){
    console.log(`error in deleting product : ${error}`);
    res.status(404).json({
      success: false,
      message: "product not found",
    });
  }
});

app.listen(ENV.PORT, () => {
  console.log(`server connected on Port : ${ENV.PORT} `);
});
