import {Types} from 'mongoose';
export interface UsuarioDTO{
    username: string,
    nombre: string,
    password: string,
    conversaciones: Array<Types.ObjectId>,
    imagen: string,
    admin: boolean
}