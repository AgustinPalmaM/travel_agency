import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send('index');
});

router.get("/about", (req, res) => {
  
  const travels = 'Travel to Spain';


  
  res.render('about', {
    travels
  });
});

router.get("/items", (req, res) => {
  
  const travels = 'Travel to Spain';


  
  res.render('items', {
    travels
  });
});

router.get('/index', (req, res) => {
  res.render('index')
})

router.get("/items", (req, res) => {
  res.send('items');
});

export default router;