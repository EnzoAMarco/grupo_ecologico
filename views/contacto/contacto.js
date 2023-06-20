// validacion de formulario

const  nombre_input = document.getElementById('nombre_input');
const  apellido_input = document.getElementById('apellido_input');
const  mail_input = document.getElementById('mail_input');
// const  tema_input = document.getElementById('tema_input');
// const  mensaje_input = document.getElementById('mensaje_input');
// let  nombre_input = document.getElementById('nombre_input');

function validarFormulario() {
  var inputs = document.getElementsByTagName('input');
  var textarea = document.getElementsByTagName('textarea')[0];

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      alert('Por favor, completa todos los campos');
      return false;
    }
  }

  if (textarea.value === '') {
    alert('Por favor, ingresa un mensaje');
    return false;
  }

  var nombre = document.getElementById('nombre_input').value;
  var apellido = document.getElementById('apellido_input').value;
  var letrasRegex = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;

  if (!nombre.match(letrasRegex)) {

    nombre_input.classList.add('borde_rojo');
    alert('El campo nombre no debe contener números');

    setTimeout(() => {

      nombre_input.classList.remove('borde_rojo')
  
    }, "3000");

    return false;
  }

  if (!apellido.match(letrasRegex)) {

    apellido_input.classList.add('borde_rojo');
    alert('El campo apellido no debe contener números');

    setTimeout(() => {

      apellido_input.classList.remove('borde_rojo')
  
    }, "3000");

    return false;
  }

  var email = document.getElementById('mail_input').value;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailRegex)) {

    mail_input.classList.add('borde_rojo');
    alert('Por favor, ingresa un email válido');

    setTimeout(() => {

    mail_input.classList.remove('borde_rojo')

    }, "3000");

    return false;
  }

  alert('El formulario ha sido enviado correctamente');
  return true;
}