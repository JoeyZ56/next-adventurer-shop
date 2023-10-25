import mongoose from "mongoose";

const connect = async () => {
  try {
    console.log("Connecting to database...");

    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw new Error("Error connecting to database");
  }
};

export default connect;
