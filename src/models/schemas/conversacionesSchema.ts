import {Schema, model, Types} from 'mongoose'; //importamos utilidades a utilizar de mongoose
import { ConversacionesDTO } from '../conversaciones/conversacinoes.dto';

const ConversacionesSchema = new Schema<ConversacionesDTO>({
    mensajes: Array<Types.ObjectId> ,
    usuarios: Array<Types.ObjectId>
}, {timestamps: true});

const conversacionesSchema = model('conversaciones' , ConversacionesSchema);
export default  conversacionesSchema;