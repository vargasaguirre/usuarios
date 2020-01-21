var lenguajeGridEs = {
  "sProcessing": "Procesando...",
  "sLengthMenu": "Mostrar _MENU_ registros",
  "sZeroRecords": "No se encontraron resultados",
  "sEmptyTable": "Ningún dato disponible en esta tabla",
  "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
  "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
  "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
  "sInfoPostFix": "",
  "sSearch": "Buscar:",
  "sUrl": "",
  "sInfoThousands": ",",
  "sLoadingRecords": "Cargando...",
  "oPaginate": {
      "sFirst": "|<",
      "sLast": ">|",
      "sNext": ">",
      "sPrevious": "<"
  },
  "oAria": {
      "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
  }
}
function inicializaDataTableConDs(idTabla, columnas, dsData, paginado = false, info = false, filtro = false) {
  $('#' + idTabla).dataTable().api().destroy();
  $('#' + idTabla).dataTable({
      "language": lenguajeGridEs,
      "processing": false,
      "data": dsData,
      "info": info,
      "autoWidth": false,
      "responsive": true,
      "stateSave": true,
      "filter": filtro,
      "paginate": paginado,
      "lengthMenu": [[10, 20, 50], [10, 20, 50]],
      "columns": columnas,
      "ordering": false
  });
}
