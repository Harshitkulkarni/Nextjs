import { promises } from "dns";
import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("the db is already connected");
    return;
  }

  try {
    const db = await mongoose.connect(
      process.env.MONGO_URI + "/" + process.env.DB_NAME || " ",
      {}
    );

    console.log(db);
    connection.isConnected = db.connections[0].readyState;
    console.log("db connected sussesfully");
  } catch (error) {
    console.log("connection failed " + error);
    process.exit(1);
  }
}
