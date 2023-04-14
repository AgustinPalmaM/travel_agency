import { Travel } from "../models/Travel.js"

const indexPage = (req, res) => {
  res.render('index', {
    pagina: 'Index'
  })
}

const aboutPage = (req, res) => {
  res.render('about', {
    pagina: 'About Us'
  })
}

const travelsPage = async (req, res) => {

  const travels = await Travel.findAll();

  res.render('travels', {
    pagina: 'Next Trips',
    travels
  })
}

const testimonialsPage = (req, res) => {
  res.render('testimonials', {
    pagina: 'Testimonials'
  })
}

export {
  indexPage,
  aboutPage,
  travelsPage,
  testimonialsPage
}

