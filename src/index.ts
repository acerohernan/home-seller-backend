import app from "./app";
import startConnection from "./database";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  startConnection();
  console.log("Server is listening in port:", PORT);
});
