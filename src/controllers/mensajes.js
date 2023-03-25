import mongoose from 'mongoose';
import mensajesSchema from '../models/schemas/mensajesShcema.ts'
async function guardarMensaje(mensaje){
    try{
            mensajesSchema.create({
            autor: 'testsBase',
            mensaje,
            conversacoin: 'testBase'
        });
    }
    catch(err){
        throw new Error(err)
    }

}
export {guardarMensaje};