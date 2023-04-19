import express from "express";
import { aboutPage, indexPage, testimonialsPage, travelsPage, detailTravelPage } from "../controllers/pagesController.js";
import { saveTestimonial } from "../controllers/testimonialsController.js";

const router = express.Router();

router.get('/', indexPage );

router.get("/about", aboutPage );

router.get("/travels", travelsPage );

router.get('/travels/:slug', detailTravelPage )

router.get('/testimonials', testimonialsPage );
router.post('/testimonials', saveTestimonial);



export default router;