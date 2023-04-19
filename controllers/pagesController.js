import { Travel } from "../models/Travel.js";
import { Testimonial } from "../models/Testimonial.js";

const indexPage = async (req, res) => {
  // make a query with 3 travels from the database
  try {
    const travels = await Travel.findAll( { limit: 3 } );
    const testimonials = await Testimonial.findAll( { limit: 3 } )

    res.render("index", {
      pagina: "Index",
      homeClass: "home",
      travels,
      testimonials
    });
  } catch (error) {
    console.log(error);
  }
};

const aboutPage = (req, res) => {
  res.render("about", {
    pagina: "About Us",
  });
};

const travelsPage = async (req, res) => {
  const travels = await Travel.findAll();

  res.render("travels", {
    pagina: "Next Trips",
    travels,
  });
};

const detailTravelPage = async (req, res) => {
  const { slug } = req.params;

  try {
    const travel = await Travel.findOne({ where: { slug: slug } });
    res.render("travel", {
      pagina: "Trip Information",
      travel,
    });
  } catch (error) {
    console.log(error);
  }
};

const testimonialsPage = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll();
    res.render("testimonials", {
      pagina: "Testimonials",
      testimonials,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  indexPage,
  aboutPage,
  travelsPage,
  testimonialsPage,
  detailTravelPage,
};
