import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(5001, () => {
  console.log("server up and running");
});
