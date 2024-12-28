const express = require("express");
const dotenv = require("dotenv");

// load environment variables
dotenv.config({ path: "./config/config.env" });

// initialize app
const app = express();

app.get("/api/v1/posts", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all posts" });
});

app.get("/api/v1/posts/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
});

app.post("/api/v1/posts", (req, res) => {
  res.status(200).json({ success: true, msg: "Created new post" });
});

app.put("/api/v1/posts/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Updated post ${req.params.id}` });
});

app.delete("/api/v1/posts/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Deleted post ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

// set up server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
