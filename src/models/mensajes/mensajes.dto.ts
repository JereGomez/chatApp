import { Types } from "mongoose";
export interface MensajesDTO{
    autor: Types.ObjectId | string,
    cuerpo: string,
    conversacion: Types.ObjectId | string
}