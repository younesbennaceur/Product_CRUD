import mongoose, { connect } from "mongoose";

export const connectDB = async (uri) => {
    try{
        mongoose
        .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Connected to MongoDB"))
        .catch((error) => console.error("Connection error", error));

    }catch(error){
        console.log(error)
    }


}