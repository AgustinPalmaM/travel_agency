const saveTestimonial = (req, res) => {
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

  console.log(errors)

}

export {
  saveTestimonial
}