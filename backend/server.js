import express from "express";
import dotenv from "dotenv";
import { ENV } from "./config/secrets.js";
import { connectDB } from "./config/db.js";
import Product  from "./models/product.model.js";
import productRoutes from "./routes/product.route.js";

const app = express();

await connectDB(ENV.MONGO_URI);

app.use(express.json());

app.use( "/api/products", productRoutes )

app.listen(ENV.PORT, () => {
  console.log(`server connected on Port : ${ENV.PORT} `);
});
