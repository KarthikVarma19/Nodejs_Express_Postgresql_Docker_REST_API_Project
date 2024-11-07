import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";
dotenv.config();
const app = express();

const port = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", userRoutes);

//Error Handler
app.use(errorHandling);

//Creating Table Before Staring Server
createUserTable();

//Testing Postgres Connection
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`The Database name is ${result.rows[0].current_database}`);
});

//Server Running
app.listen(port, () => {
  console.log(`Server is running at http:localhost:${port}`);
});
