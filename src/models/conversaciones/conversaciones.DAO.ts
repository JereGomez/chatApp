import { DAOInterface } from "../dao.interface";
import { ConversacionesDTO } from "./conversacinoes.dto";
import conversacionesSchema from '../schemas/conversacionesSchema'
export class ConversacionesDAO implements DAOInterface<ConversacionesDTO, number>{
    private schema;
    private static instance;
    constructor(){
        this.schema = conversacionesSchema;
    }

    static getInstance(){
        if(!ConversacionesDAO.instance){
            ConversacionesDAO.instance = new ConversacionesDAO();
        }
        return this.instance;
    }

        async save(object?: ConversacionesDTO | undefined) {
        try{
            const nuevo =  await this.schema.create(object);
            return nuevo;
        }
        catch(err){
            throw new Error (`Ocurrio un error al crear una nueva conversacion ${err}`);
        }
    }
    async getById(id: number) {
        try{
            const item = await this.schema.findOne({'_id': id});
            return item;
        }
        catch(err){
            throw new Error(`Ocurrio un error al buscar conversacion por ID ${err}`);
        }
    }
    async getAll(id?: number | undefined) {
        try{
            const items = await this.schema.find();
            return items;
        }
        catch(err){
            throw new Error(`Ocurrio un error al traer todas las conversaciones ${err}`)
        }
    }
    async deleteById(id: number) {
        try{
            const result = await this.schema.deleteOne({'_id': id});
            return result; 
        }
        catch (err){
            throw new Error(`Error al borrar conversacion por ID ${err}`);
        }
    }
    async deleteAll(id?: number | undefined) {
        try{
            const result = await this.schema.deleteMany();
            return result;
        }
        catch (err){
            throw new Error(`Error al eliminar todas las conversacoines ${err}`);
        }
    }
    async updateById(object: ConversacionesDTO, id: number) {
        try{
            await this.schema.updateOne(
                {'_id':id},
                {$set: object}
            );
        }
        catch (err){
            throw new Error(`Error al actualizar conversacion por ID ${err}`);
        }

    }
}

export default ConversacionesDAO.getInstance();