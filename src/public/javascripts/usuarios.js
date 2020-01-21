$(document).ready(function()
{
  cargarGrid();
 function cargarGrid(){
  $.post("/users/get",function (response)
  {
    exito(response.data)
  });
  }
  var UserColumnas = [
    {
        "data": "Nombre",
        "class": "text-left",
        "orderable": false,
    },
    {
      "data": "Usuario",
      "class": "text-left",
      "orderable": false,
    },
    {
      "data": "Cargo",
      "class": "text-left",
      "orderable": false,
    },
    {
      "data": "NoIntentos",
      "class": "text-left",
      "orderable": false,
    },
    {
      "data": "Edad",
      "class": "text-left",
      "orderable": false,
    },
];
$('#Salir').click(function(){
  $.post("/users/logout",function (response){});
});
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
       $.post("/users/new",data,function (response)
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
  function exito(response) 
  {
    inicializaDataTableConDs('tblUsuarios', UserColumnas, response, true, true, true);
  }
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
