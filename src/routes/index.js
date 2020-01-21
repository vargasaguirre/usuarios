module.exports = function(connection,validate)
{
  const express = require('express');
  var router = express.Router();

  router.get('/',validate.ruta, (req, res) => {
    res.render('index', { title: 'Realidad Virtual',nav :req.session.nav});
  });
  router.get('/contact',validate.ruta, (req, res) => {
    res.render('contact', { title: 'Contact Page',nav :req.session.nav });
  });
  router.get('/users',validate.ruta, (req, res) => {
    res.render('new_user', { title: 'Aracne Tecnologies', nav:req.session.nav });
  });
  router.get('/about',validate.ruta, (req, res) => {
    res.render('about', { title: 'Contact Page',nav :req.session.nav});
  });
  router.get('/Estadisticas',validate.ruta, (req, res) => {
    res.render('estadisticas', { title: 'Estadisticas de los usuarios',nav :req.session.nav});
  });
  return router;
}
