import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send('index');
});

router.get("/about", (req, res) => {
  res.send('about');
});

router.get("/items", (req, res) => {
  res.send('items');
});

export default router;