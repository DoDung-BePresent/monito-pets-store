import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(() => {
  console.log("Server is running on port: ", PORT);
});

// // Connect DB and start server
// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// });
