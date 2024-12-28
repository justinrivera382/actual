const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all posts" });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Created new post" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Updated post ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Deleted post ${req.params.id}` });
});

module.exports = router;
