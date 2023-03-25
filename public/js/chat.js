const socket = io();

socket.on('connect' , ()=>{
    console.log('cliente conectado al servidor');
});

function nuevoMensaje(){
    let mensaje = document.getElementById('msjInput').value;
    socket.on('mostrarMensajes', (mensajes)=>{mostrarMensajes(mensajes)})
    socket.emit('nuevoMensaje', mensaje)
}

function mostrarMensajes(){
    let contenedor = ''

}