import { Testimonial } from "../models/Testimonial.js";

const saveTestimonial = async (req, res) => {
  // validate fields are not emprty

  const { nombre, correo, mensaje } = req.body;

  const  errors = [];

  if(nombre.trim() === '') {
    errors.push( { message: 'Name is empty' } );
  }
  
  if(correo.trim() === '') {
    errors.push( {message: 'Email is empty'} );
  }

  if(mensaje.trim() === '') {
    errors.push( {message: 'Message is empty'} )
  }

  if(errors.length > 0) {

    const testimonials = await Testimonial.findAll();
    res.render('testimonials', {
      pagina: 'Testimonials',
      errors,
      nombre, 
      correo,
      mensaje,
      testimonials
    })
  } else {
    try {
      await Testimonial.create({
        name: nombre,
        email: correo,
        message: mensaje
      })
      res.redirect('testimonials')
    } catch (error) {
      console.log(error)
    }
  }

}

export {
  saveTestimonial
}