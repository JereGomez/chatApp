import { DAOInterface } from "../dao.interface";
import { UsuarioDTO } from "./usuarios.dto";
import usuariosSchema from "../schemas/userSchema";

class UsuariosDAO implements DAOInterface<UsuarioDTO, number>{
    private schema;
    private static instance;
    constructor(){
        this.schema = usuariosSchema;
    }

    static getInstance(){
        if(!UsuariosDAO.instance){
            UsuariosDAO.instance = new UsuariosDAO();
        }
        return this.instance;
    }

    async save(object?: UsuarioDTO | undefined) {
        try{
            const nuevo =  await this.schema.create(object);
            return nuevo;
        }
        catch(err){
            throw new Error (`Ocurrio un error al crear un nuevo usuario ${err}`);
        }
    }
    async getById(id: number) {
        try{
            const item = await this.schema.findOne({'_id': id});
            return item;
        }
        catch(err){
            throw new Error(`Ocurrio un error al buscar usuario por ID ${err}`);
        }
    }
    async getAll(id?: number | undefined) {
        try{
            const items = await this.schema.find();
            return items;
        }
        catch(err){
            throw new Error(`Ocurrio un error al traer todos los usuarios ${err}`)
        }
    }
    async deleteById(id: number) {
        try{
            const result = await this.schema.deleteOne({'_id': id});
            return result; 
        }
        catch (err){
            throw new Error(`Error al borrar usuario por ID ${err}`);
        }
    }
    async deleteAll(id?: number | undefined) {
        try{
            const result = await this.schema.deleteMany();
            return result;
        }
        catch (err){
            throw new Error(`Error al eliminar todos los usuarios ${err}`);
        }
    }
    async updateById(object: UsuarioDTO, id: number) {
        try{
            await this.schema.updateOne(
                {'_id':id},
                {$set: object}
            );
        }
        catch (err){
            throw new Error(`Error al actualizar usuario por ID ${err}`);
        }

    }

    async getByUsername(username: string){
        try{
        return await this.schema.findOne({username});
        }
        catch(err){
            throw new Error(`Error al buscar  usuario por username ${err}`);
        }
    }
}

export default UsuariosDAO.getInstance();