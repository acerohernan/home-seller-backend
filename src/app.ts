import express from "express";
import cors from "cors";

import indexRoutes from "./routes";

const app = express();

//midlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/houses", indexRoutes);

export default app;
