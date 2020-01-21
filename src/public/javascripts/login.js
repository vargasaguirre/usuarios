$(document).ready(function()
{
  
  $('#Iniciar').click(function()
  {
    if(document.getElementById('nameAccess').value.trim()!=""&&document.getElementById('passwordAccess').value.trim()!=""){
      data = {
              name:document.getElementById('nameAccess').value,
              password : document.getElementById('passwordAccess').value
            };
            $.post("users/login",data,function (response)
           {
            if(response.status)
            {
              mensajeExito("Bienvenido");
              $("#Iniciarnav").hide();
              $(location).attr('href','/users/home');
            }else{
              mensajeError("Usuario o contraseña incorrectos");
            }
          });
    }else{
      mensajeError("Llene todos los campos");
    }
  });
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
    $('#Guardar').click(function()
  {
    if(document.getElementById('Nombre').value.trim()!=""&&document.getElementById('Edad').value.trim()!=""&&document.getElementById('Cargo').value.trim()!=""&&document.getElementById('password').value.trim()!=""&&document.getElementById('Usuario').value.trim()!="")
    {
       data = {
        Nombre:document.getElementById('Nombre').value,
        Edad:document.getElementById('Edad').value,
        Cargo:document.getElementById('Cargo').value,
        Password:document.getElementById('Cargo').value,
        Usuario:document.getElementById('Usuario').value
       };
       $.post("users/new",data,function (response)
      {
       verificarExito(response);
       console.log(response.status);
      });
    }
    else
    {
      mensajeError("Llene todos los campos");
    }
    function verificarExito(response)
    {
      if(response.status)
      {
        $("#myModal").modal('hide');
        mensajeExito("Usuario guardado con exito");
      }
    }
  });
});
