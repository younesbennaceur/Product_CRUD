import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.log(`error in fetching products : ${error} `);
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
export const createProduct = async (req, res) => {
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
    res.status(200).json({
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
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res.status(400).json({
      success: false,
      message: "please provide all fields (name, price, image",
    });
  }

  // Vérifiez si l'ID est un ObjectId valide
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid product ID",
    });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, image },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "prodcut updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "internal server error",
    });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      message: "product deleted successfully",
    });
  } catch (error) {
    console.log(`error in deleting product : ${error}`);
    res.status(404).json({
      success: false,
      message: "product not found",
    });
  }
};
