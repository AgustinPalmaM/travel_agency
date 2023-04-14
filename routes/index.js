import express from "express";

const router = express.Router();

router.get('/', (req, res) => {

  res.render('index', {
    pagina: 'Index'
  })
})

router.get("/about", (req, res) => {
  
  res.render('about', {
    pagina: 'About Us'
  })

});

router.get("/travels", (req, res) => {
  
  res.render('travels', {
    pagina: 'Travels'
  })
  
});

router.get("/testimonials", (req, res) => {
  
  res.render('testimonials', {
    pagina: 'Testimonials'
  })
  
});



export default router;