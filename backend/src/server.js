import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("Server running");
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(ENV.PORT, () => {
      console.log("server up and running on:", ENV.PORT);
    });
    app;
  } catch (error) {
    console.log("Failed to start server:", error.message);
    process.exit(1);
  }
};