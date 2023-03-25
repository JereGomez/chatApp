import path from 'path';
const __dirname = path.resolve();

import UsuariosDAO from '../models/usuarios/usuarios.DAO.ts'
import {hashPassword , comparePassword} from "../utils/hash.js"
import jwt from 'jsonwebtoken';
import config from '../config/config.js';


async function signup(req, username, password, done){
    try{
        const auxUser = await UsuariosDAO.getByUsername(username);
        if (auxUser) {
            done(new Error(`User already exists`), null);
        }
        else{
            let nombre = req.body.nombre;
            if(password === req.body.passCheck){
                if(username, password, nombre){
                    const user = {username, nombre, password};
                    user.password = hashPassword(password);
                    const newUser = await UsuariosDAO.save(user);
                    return done(null, newUser);
                }
                done(new Error(`Missing nignup data`), null);
            }
            done(new Error(`Password fields dont match`), null);
        }
        }
    catch(err){
        done(new Error(`Error en signup ${err}`), null);
    }
}



async function login( username, password, done){
    try{
        const user = await UsuariosDAO.getByUsername(username); //usernmae= email
        const passHash = user.password;
        if (!user || !comparePassword(password, passHash)) {
            done(new Error(`invalid username or password`), null);
        }
        return done(null, user);
    }
    catch(err){
        done(new Error(`Error en login ${err}`, null))
    }
}


async function serializeUser(user, done){
        done(null, user._id);
}

async function deserializeUser(id, done){
    //id = new Types.ObjectId(id);
    const user = await UsuariosDAO.getById(id);
    done(null, user);
  };


async function postSignup(req, res, done){
    try{
        req.session.user = req.user;
        const token = jwt.sign(req.body.username, config.claveSecreta);
        req.session.token = token;
        console.log('UsuarioCreado' + req.session.user);
        res.redirect('/');
    }
    catch(err){
        done(new Error(`Error en postSignup ${err}`, null))
    }
}

async function postLogin(req, res, done){
    try{
        //GENERAR Y ENVIAR JWT TOKEN PARA AUTENTICACION DE RUTAS LUEGO DEL LOG IN
        const user = req.body.username;
        const token = jwt.sign(user, config.claveSecreta);
        req.session.user = req.user;
        req.session.token = token;
        res.redirect('/');
    }
    catch(err){
        done(new Error(`Error en postLogin ${err}`, null))
    }
}

async function logout(req, res, done){
    try{
        req.session.destroy( (err)=>{
            if (err)   res.redirect('/')
        });
        req.logout(()=>{
            res.send('User logged out')
        })

    }
    catch(err){
        done(new Error(`Error en logout ${err}`, null))
    }
}

 function loginPage(req,res){
    res.sendFile(__dirname + '/public/html/login.html');
}

function signupPage(req,res){
    res.sendFile(__dirname + '/public/html/signup.html');
}

export {
    signup,
    login,
    postSignup,
    postLogin,
    logout,
    loginPage,
    signupPage,
    serializeUser,
    deserializeUser
}