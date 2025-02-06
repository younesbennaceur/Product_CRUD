import mongoose from "mongoose";
import express, { Router } from "express";
import Product from "../models/product.model.js";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.use(express.json());

router.get("/", getAllProducts);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
