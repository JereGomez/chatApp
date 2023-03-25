import {guardarMensaje} from '../controllers/mensajes.js'

export function canalSocket(socketServer){
    socketServer.on('connection' , async (socket)=>{ //socket es el canal entre el cliente y el servidor
        console.log(`nuevo cliente conectado`);
        
        socket.on('nuevoMensaje', async (mensaje)=>{
            await guardarMensaje(mensaje)
        })
    });
}