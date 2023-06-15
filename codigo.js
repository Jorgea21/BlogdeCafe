window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}

const datos = {
    nombre : '',
    email :'',
    mensaje : ''
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', imprimirInput)
email.addEventListener('input', imprimirInput)
mensaje.addEventListener('input', imprimirInput)

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    
    const {nombre, email, mensaje} = datos;
    if(nombre === '' || email === '' || mensaje === '' ){
      mostrarError('Todos los campos son obligatorios');  // console.log('Todos los campos son obligatorios');
        return;
    }

    mostrarMensaje('Mensaje enviado correctamente');
   
});

function imprimirInput(e){
    datos[e.target.id] = e.target.value;     
    console.log(e.target);
    console.log(datos);
}

function mostrarError(mensaje){
   const error = document.createElement('P');
   error.textContent = mensaje;
   error.classList.add('error');
   formulario.appendChild(error);

   setTimeout(() =>{
    error.remove();
   },5000);
}

function mostrarMensaje(mensaje){
    const enviarMensaje = document.createElement('P');
    enviarMensaje.textContent = mensaje;
    enviarMensaje.classList.add('mensaje-enviado');
    formulario.appendChild(enviarMensaje);
    setTimeout(() =>{
        enviarMensaje.remove();
    }, 5000);



}

