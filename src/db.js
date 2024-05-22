import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/apptesdb");
    console.log(">>> Connect DB");
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
