import mongoose, {Schema, model, Types} from 'mongoose'; //importamos utilidades a utilizar de mongoose
import { MensajesDTO } from '../mensajes/mensajes.dto';

const MensajesSchema = new Schema<MensajesDTO>({
    autor: Types.ObjectId , //mail
    cuerpo: {type: String, require: true, maxLength: 100},
    conversacion: Types.ObjectId,
}, {timestamps: true});

const mensajesSchema = model('mensajes' , MensajesSchema);
export default  mensajesSchema;