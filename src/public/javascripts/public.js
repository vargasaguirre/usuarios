$(document).ready(function()
{
  
  function mensajeExito(mensaje) {
    Swal.fire(
      'Operacion Exitosa!',
      mensaje+' !',
      'success'
    )
  }
  function mensajeError(mensaje) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: mensaje+' !',
    })
  }
});
