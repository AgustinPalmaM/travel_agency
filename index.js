import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send('index');
});

app.get("/about", (req, res) => {
  res.send('about');
});

app.get("/items", (req, res) => {
  res.send('items');
});

app.listen(port, () => {
  console.log(`El servidor esta corriendo en ${port}`);
});
