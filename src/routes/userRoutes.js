import express from 'express';
const {Router} = express //se importa la funcion router
const apiUser = Router();
import {
  signup,
  login,
  postLogin,
  postSignup,
  logout,  
  loginPage,
  signupPage,
  serializeUser,
  deserializeUser} from '../controllers/usuarios.js';

import passport from 'passport';
import {Strategy as LocalStrategy} from "passport-local";
import {Types} from 'mongoose';

//passport config
passport.use("login", new LocalStrategy(login));
passport.use("signup" ,new LocalStrategy({passReqToCallback: true}, signup));


passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);


//POST
apiUser.post('/signup', passport.authenticate("signup", { failureRedirect: ''}), postSignup);
apiUser.post("/login",passport.authenticate("login", {failureRedirect: ''}), postLogin); 
//GET
apiUser.get('/logout', logout);
apiUser.get('/login', loginPage);
apiUser.get('/signup', signupPage);




export  {apiUser}