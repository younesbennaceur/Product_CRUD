import express from "express";
import dotenv from "dotenv"
import {ENV} from "./config/secrets.js"
import { connectDB } from "./config/db.js";
const app = express();


app.get("/", (req , res) => {
  res.send("server is ready");
});

 await connectDB(ENV.MONGO_URI)

app.listen(ENV.PORT , () => {
  console.log(`server connected on Port : ${ENV.PORT} `);
});
