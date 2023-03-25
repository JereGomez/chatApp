import jwt from 'jsonwebtoken';
import config from '../config/config.js'

function authorization (req, res, next){
  if(!req.session.active && !req.isAuthenticated()) {
    console.log('no hay session')
    req.session.user = {nombre: 'Guest'}
    req.session.active = true;
    req.session.token = jwt.sign('Guest', config.claveSecreta);
    next(); //false indica que no esta loggeado por lo que es un guest
  } 
  else{
    console.log('hay session')
    console.log(req.session.user)
    const token = req.session.token;
    if(token != undefined && req.isAuthenticated()){ //req.session.user != undefined req.isAuthenticated() devuelve true si el usuario inicio sesion
        jwt.verify(token, config.claveSecreta, (err, data) =>{
          if(err){
            res.status(403).send('Invalid Token o error al validarlo')
          }
          else{
            req.session.logged = true; //indica que esta loggeado por lo que es 
            next();
          }
        });
      }
      else if(token != undefined && !req.isAuthenticated()){
        req.session.logged = false;
        next();
      }
      else{
        res.status(403).send('Unouthorized, token missing or user not logged in');
      }
  }

}

  export {authorization}