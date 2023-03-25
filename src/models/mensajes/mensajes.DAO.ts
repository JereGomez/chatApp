import { DAOInterface } from "../dao.interface";
import { MensajesDTO } from "./mensajes.dto";
import mensajesSchema from "../schemas/mensajesShcema";

export class MensajesDAO implements DAOInterface<MensajesDTO, number>{
    private schema;
    private static instance;
    constructor(){
        this.schema = mensajesSchema;
    }

    static getInstance(){
        if(!MensajesDAO.instance){
            MensajesDAO.instance = new MensajesDAO();
        }
        return this.instance;
    }

    async save(object?: MensajesDTO | undefined) {
        try{
            await this.schema.create(object)
        }
        catch(err){
            throw new Error(`Error al guardar un mensaje en la base de datos ${err}`)
        }
    }
    async getById(id: number) {
        try{
            const item = await this.schema.findOne({'_id': id});
            return item;
        }
        catch(err){
            throw new Error(`Error al traer un mensaje por ID de la base de datos ${err}`)
        }
    }
    async getAll(id?: number | undefined) {
        try{
            //No implemento, por el momento no se van a pedir todos los mensajes existentes
        }
        catch(err){
            throw new Error(` ${err}`)
        }
    }
    async deleteById(id: number) {
        try{
            await this.schema.deleteOne({'_id' : id});
        }
        catch(err){
            throw new Error(`Error al eliminar un mensaje de la base de datos ${err}`)
        }
    }
    async deleteAll(id?: number | undefined) {
        try{
            //no implemento, por el momento no se van a eliminar todos los mensajes existentes EVALUAR REFACTORIZAR PARA QUE EN ESTE APARTADO SE ELIMINEN TODOS LOS MENSAJES DE CONVERSACIONES ELIMINADAS 
        }
        catch(err){
            throw new Error(` ${err}`)
        }
    }
    async updateById(object: MensajesDTO, id: number) {
        try{
            await this.schema.updateOne({'_id': id}, {$set: object});
        }
        catch(err){
            throw new Error(`Error al actualizar un mensaje por ID en la base de datos ${err}`)
        }
    }

}

export default MensajesDAO.getInstance();