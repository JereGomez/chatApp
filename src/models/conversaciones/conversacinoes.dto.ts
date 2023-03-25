import {Types} from 'mongoose';
export interface ConversacionesDTO{
    mensajes: Array<Types.ObjectId>,
    usuarios: Array<Types.ObjectId>,
}