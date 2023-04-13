import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index')
})

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



export default router;