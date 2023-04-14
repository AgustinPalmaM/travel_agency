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

const travelsPage = (req, res) => {
  res.render('travels', {
    pagina: 'Travels'
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

