exports.auth = function (req,res,next){
  console.log("Sesion del usuario"+req.session.user);
  if(req.session.user){
    next();
  }
  else
  {
    res.redirect('/');
  }
  console.log(req.session.user);
}
exports.ruta = function (req,res,next){
  if(req.session.user){
    req.session.nav = 'partials/navigation2';
    next();
  }
  else
  {
    req.session.nav = 'partials/navigation';
    console.log("Mandando a nav"+req.session.nav);
    next();
  }
}