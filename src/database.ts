import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbName = process.env.MONGODB_NAME;
const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_PASSWORD;

const URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.jbe9p.mongodb.net/${dbName}?retryWrites=true&w=majority`;

async function startConnection() {
  try {
    await connect(URI);
    console.log("MongoDB connected");
  } catch (e) {
    console.error(e);
  }
}

export default startConnection;
