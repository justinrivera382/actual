const express = require("express");
const dotenv = require("dotenv");

// load environment variables
dotenv.config({ path: "./config/config.env" });

// initialize app
const app = express();

// route files
const posts = require("./routes/posts");

// mount routers
app.use("/api/v1/posts", posts);

const PORT = process.env.PORT || 5000;

// set up server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
