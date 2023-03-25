import express from 'express';
const {Router} = express //se importa la funcion router
const mainApi = Router();
import {
    home
} from '../controllers/mainController.js'
import { authorization } from '../utils/auth.js';

mainApi.get('', authorization ,home);

export  {mainApi}