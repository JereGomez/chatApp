import express from 'express';
const app = express();
import passport from 'passport';
import connect from './src/utils/dbConnect.js'
connect(app);
import {Server as HTTPServer} from 'http'; 
import {Server as SocketServer} from 'socket.io'; 
const httpServer = new HTTPServer(app);
const socketServer = new SocketServer(httpServer);
import {canalSocket} from './src/socket/socket.js';
import cookieParser from 'cookie-parser';
import {apiUser} from './src/routes/userRoutes.js';
import {mainApi} from './src/routes/mainRoutes.js'

//canalSocket(socketServer);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser())
app.use(apiUser);
app.use(mainApi);

const PORT = process.env.PORT || 8080;
httpServer.listen(PORT , ()=>{
    console.log(`Listening on ${PORT}`);
});