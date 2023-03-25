import {Schema, model, Types} from 'mongoose'; //importamos utilidades a utilizar de mongoose
import { UsuarioDTO } from '../usuarios/usuarios.dto';

const UsersSchema = new Schema<UsuarioDTO>({
    username: {type: String, require: true}, //mail
    nombre: {type: String, require: true, maxLength: 100},
    password: {type: String},
    imagen: {type: String},
    admin: {type: Boolean, default: false}
}, {timestamps: true});

const usuariosSchema = model('usuarios' , UsersSchema);
export default  usuariosSchema;