module.exports = function(connection,validate)
{
  const express = require('express');
  var router = express.Router();
  router.get('/home',validate.ruta,validate.auth ,(req, res) => {
    res.render('home', { title: 'Home Page' ,nav :req.session.nav});
  });
  router.post('/new', function(req, res)
  {
    var query = `INSERT INTO usuariosf(Nombre,Cargo,NoIntentos,password,Edad,Usuario)  VALUES('${req.body.Nombre}','${req.body.Cargo}',0,'${req.body.Password}',${req.body.Edad},'${req.body.Usuario}')`;
      connection.query(query, function(err, rows, fields)
      {
        if (err) throw err;
        if(rows.affectedRows>0){
          res.json({
            'status' : true,
            'message' : "Usuario registrado correctamente!",
            'data' : false
            });
        }
        else {
          res.json({
            'status' : false,
            'message' : "Errores al insertar!",
            'data' : false
            });
        }
      });
  });
  router.post('/get', function(req,res)
  {
    var query = "SELECT * FROM usuariosf WHERE Administrador = 0";
      connection.query(query, function(err, rows, fields)
      {
        if (err) throw err;
        if(rows.length>0){
          res.json({
            'status' : true,
            'message' : "Usuarios encontrados !",
            'data' : rows
            });
        }else{
          res.json({
            'status' : true,
            'message' : "No se encontraron coincidencias !",
            'data' : rows
            });
        }
      });
  });
  router.post('/login', function(req, res)
  {
    console.log(req.session.user);
    var query = `SELECT * FROM usuariosf WHERE Usuario = '${req.body.name}' and password ='${req.body.password}'`;
      connection.query(query, function(err, rows, fields)
      {
        if (err) throw err;
        if(rows.length>0){
          req.session.user = 'partials/navigation';
          res.json({
            'status' : true,
            'message' : "Usuario encontrado con exito!"
            });
        }else{
          if (err) throw err;
            res.json({
              'status' : false,
              'message' : "Usuario o contraseña incorrectos!"
              });
        }
      });
  });
  router.post('/logout', function(req, res)
  {
    req.session.destroy(function(err) {
      if(err) {
        res.json({
           'status' : false,
          'mesagge' : 'Error closing session',
             'data' : false
        });
      } else {
        res.json({
           'status' : true,
          'message' : 'Session closed',
             'data' : false
        });
      }
    });
  });
  return router;
}
