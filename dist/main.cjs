/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_utils_dbConnect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/utils/dbConnect.js */ \"./src/utils/dbConnect.js\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_routes_userRoutes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/routes/userRoutes.js */ \"./src/routes/userRoutes.js\");\n/* harmony import */ var _src_routes_mainRoutes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/routes/mainRoutes.js */ \"./src/routes/mainRoutes.js\");\n\r\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\n\r\n\r\n(0,_src_utils_dbConnect_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(app);\r\n\r\n\r\nconst httpServer = new http__WEBPACK_IMPORTED_MODULE_3__.Server(app);\r\nconst socketServer = new socket_io__WEBPACK_IMPORTED_MODULE_4__.Server(httpServer);\r\n\r\n\r\n\r\n//canalSocket(socketServer);\r\napp.use(passport__WEBPACK_IMPORTED_MODULE_1___default().initialize());\r\napp.use(passport__WEBPACK_IMPORTED_MODULE_1___default().session());\r\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('public'));\r\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({ extended: true }));\r\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\r\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_5___default()());\r\napp.use(_src_routes_userRoutes_js__WEBPACK_IMPORTED_MODULE_6__.apiUser);\r\napp.use(_src_routes_mainRoutes_js__WEBPACK_IMPORTED_MODULE_7__.mainApi);\r\nconst PORT = process.env.PORT || 8080;\r\nhttpServer.listen(PORT, () => {\r\n    console.log(`Listening on ${PORT}`);\r\n});\r\n\n\n//# sourceURL=webpack://sockets/./index.ts?");

/***/ }),

/***/ "./src/models/schemas/userSchema.ts":
/*!******************************************!*\
  !*** ./src/models/schemas/userSchema.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n //importamos utilidades a utilizar de mongoose\r\nconst UsersSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\r\n    username: { type: String, require: true },\r\n    nombre: { type: String, require: true, maxLength: 100 },\r\n    password: { type: String },\r\n    imagen: { type: String },\r\n    admin: { type: Boolean, default: false }\r\n}, { timestamps: true });\r\nconst usuariosSchema = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('usuarios', UsersSchema);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usuariosSchema);\r\n\n\n//# sourceURL=webpack://sockets/./src/models/schemas/userSchema.ts?");

/***/ }),

/***/ "./src/models/usuarios/usuarios.DAO.ts":
/*!*********************************************!*\
  !*** ./src/models/usuarios/usuarios.DAO.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _schemas_userSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../schemas/userSchema */ \"./src/models/schemas/userSchema.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nclass UsuariosDAO {\r\n    constructor() {\r\n        this.schema = _schemas_userSchema__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    }\r\n    static getInstance() {\r\n        if (!UsuariosDAO.instance) {\r\n            UsuariosDAO.instance = new UsuariosDAO();\r\n        }\r\n        return this.instance;\r\n    }\r\n    save(object) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const nuevo = yield this.schema.create(object);\r\n                return nuevo;\r\n            }\r\n            catch (err) {\r\n                throw new Error(`Ocurrio un error al crear un nuevo usuario ${err}`);\r\n            }\r\n        });\r\n    }\r\n    getById(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const item = yield this.schema.findOne({ '_id': id });\r\n                return item;\r\n            }\r\n            catch (err) {\r\n                throw new Error(`Ocurrio un error al buscar usuario por ID ${err}`);\r\n            }\r\n        });\r\n    }\r\n    getAll(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const items = yield this.schema.find();\r\n                return items;\r\n            }\r\n            catch (err) {\r\n                throw new Error(`Ocurrio un error al traer todos los usuarios ${err}`);\r\n            }\r\n        });\r\n    }\r\n    deleteById(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const result = yield this.schema.deleteOne({ '_id': id });\r\n                return result;\r\n            }\r\n            catch (err) {\r\n                throw new Error(`Error al borrar usuario por ID ${err}`);\r\n            }\r\n        });\r\n    }\r\n    deleteAll(id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                const result = yield this.schema.deleteMany();\r\n                return result;\r\n            }\r\n            catch (err) {\r\n                throw new Error(`Error al eliminar todos los usuarios ${err}`);\r\n            }\r\n        });\r\n    }\r\n    updateById(object, id) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                yield this.schema.updateOne({ '_id': id }, { $set: object });\r\n            }\r\n            catch (err) {\r\n                throw new Error(`Error al actualizar usuario por ID ${err}`);\r\n            }\r\n        });\r\n    }\r\n    getByUsername(username) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            try {\r\n                return yield this.schema.findOne({ username });\r\n            }\r\n            catch (err) {\r\n                throw new Error(`Error al buscar  usuario por username ${err}`);\r\n            }\r\n        });\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsuariosDAO.getInstance());\r\n\n\n//# sourceURL=webpack://sockets/./src/models/usuarios/usuarios.DAO.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("connect-mongo");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n\r\n\r\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\r\nconst config = {\r\n    uriString : \"mongodb+srv://jere:LsN88J6L7avrPFrL@cluster0.2tmx7hc.mongodb.net/?retryWrites=true&w=majority\",\r\n    claveSecreta : \"KdndsubvP33452\",\r\n    tokenSecreta: \"secretTokenKey123\"\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://sockets/./src/config/config.js?");

/***/ }),

/***/ "./src/controllers/mainController.js":
/*!*******************************************!*\
  !*** ./src/controllers/mainController.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n\r\nasync function home (req, res){\r\n    try{\r\n        const user = req.session.user;\r\n        const session = req.session;\r\n        res.send({session});\r\n    }\r\n    catch(err){\r\n        throw new Error(err)\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://sockets/./src/controllers/mainController.js?");

/***/ }),

/***/ "./src/controllers/usuarios.js":
/*!*************************************!*\
  !*** ./src/controllers/usuarios.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deserializeUser\": () => (/* binding */ deserializeUser),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"loginPage\": () => (/* binding */ loginPage),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"postLogin\": () => (/* binding */ postLogin),\n/* harmony export */   \"postSignup\": () => (/* binding */ postSignup),\n/* harmony export */   \"serializeUser\": () => (/* binding */ serializeUser),\n/* harmony export */   \"signup\": () => (/* binding */ signup),\n/* harmony export */   \"signupPage\": () => (/* binding */ signupPage)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var _models_usuarios_usuarios_DAO_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/usuarios/usuarios.DAO.ts */ \"./src/models/usuarios/usuarios.DAO.ts\");\n/* harmony import */ var _utils_hash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hash.js */ \"./src/utils/hash.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config.js */ \"./src/config/config.js\");\n\r\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_0__.resolve();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function signup(req, username, password, done){\r\n    try{\r\n        const auxUser = await _models_usuarios_usuarios_DAO_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getByUsername(username);\r\n        if (auxUser) {\r\n            done(new Error(`User already exists`), null);\r\n        }\r\n        else{\r\n            let nombre = req.body.nombre;\r\n            if(password === req.body.passCheck){\r\n                if(username, password, nombre){\r\n                    const user = {username, nombre, password};\r\n                    user.password = (0,_utils_hash_js__WEBPACK_IMPORTED_MODULE_2__.hashPassword)(password);\r\n                    const newUser = await _models_usuarios_usuarios_DAO_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].save(user);\r\n                    return done(null, newUser);\r\n                }\r\n                done(new Error(`Missing nignup data`), null);\r\n            }\r\n            done(new Error(`Password fields dont match`), null);\r\n        }\r\n        }\r\n    catch(err){\r\n        done(new Error(`Error en signup ${err}`), null);\r\n    }\r\n}\r\n\r\n\r\n\r\nasync function login( username, password, done){\r\n    try{\r\n        const user = await _models_usuarios_usuarios_DAO_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getByUsername(username); //usernmae= email\r\n        const passHash = user.password;\r\n        if (!user || !(0,_utils_hash_js__WEBPACK_IMPORTED_MODULE_2__.comparePassword)(password, passHash)) {\r\n            done(new Error(`invalid username or password`), null);\r\n        }\r\n        return done(null, user);\r\n    }\r\n    catch(err){\r\n        done(new Error(`Error en login ${err}`, null))\r\n    }\r\n}\r\n\r\n\r\nasync function serializeUser(user, done){\r\n        done(null, user._id);\r\n}\r\n\r\nasync function deserializeUser(id, done){\r\n    //id = new Types.ObjectId(id);\r\n    const user = await _models_usuarios_usuarios_DAO_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getById(id);\r\n    done(null, user);\r\n  };\r\n\r\n\r\nasync function postSignup(req, res, done){\r\n    try{\r\n        req.session.user = req.user;\r\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__.sign(req.body.username, _config_config_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].claveSecreta);\r\n        req.session.token = token;\r\n        console.log('UsuarioCreado' + req.session.user);\r\n        res.redirect('/');\r\n    }\r\n    catch(err){\r\n        done(new Error(`Error en postSignup ${err}`, null))\r\n    }\r\n}\r\n\r\nasync function postLogin(req, res, done){\r\n    try{\r\n        //GENERAR Y ENVIAR JWT TOKEN PARA AUTENTICACION DE RUTAS LUEGO DEL LOG IN\r\n        const user = req.body.username;\r\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__.sign(user, _config_config_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].claveSecreta);\r\n        req.session.user = req.user;\r\n        req.session.token = token;\r\n        res.redirect('/');\r\n    }\r\n    catch(err){\r\n        done(new Error(`Error en postLogin ${err}`, null))\r\n    }\r\n}\r\n\r\nasync function logout(req, res, done){\r\n    try{\r\n        req.session.destroy( (err)=>{\r\n            if (err)   res.redirect('/')\r\n        });\r\n        req.logout(()=>{\r\n            res.send('User logged out')\r\n        })\r\n\r\n    }\r\n    catch(err){\r\n        done(new Error(`Error en logout ${err}`, null))\r\n    }\r\n}\r\n\r\n function loginPage(req,res){\r\n    res.sendFile(__dirname + '/public/html/login.html');\r\n}\r\n\r\nfunction signupPage(req,res){\r\n    res.sendFile(__dirname + '/public/html/signup.html');\r\n}\r\n\r\n\n\n//# sourceURL=webpack://sockets/./src/controllers/usuarios.js?");

/***/ }),

/***/ "./src/routes/mainRoutes.js":
/*!**********************************!*\
  !*** ./src/routes/mainRoutes.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainApi\": () => (/* binding */ mainApi)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _controllers_mainController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/mainController.js */ \"./src/controllers/mainController.js\");\n/* harmony import */ var _utils_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/auth.js */ \"./src/utils/auth.js\");\n\r\nconst {Router} = express__WEBPACK_IMPORTED_MODULE_0__ //se importa la funcion router\r\nconst mainApi = Router();\r\n\r\n\r\n\r\nmainApi.get('', _utils_auth_js__WEBPACK_IMPORTED_MODULE_2__.authorization ,_controllers_mainController_js__WEBPACK_IMPORTED_MODULE_1__.home);\r\n\r\n\n\n//# sourceURL=webpack://sockets/./src/routes/mainRoutes.js?");

/***/ }),

/***/ "./src/routes/userRoutes.js":
/*!**********************************!*\
  !*** ./src/routes/userRoutes.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiUser\": () => (/* binding */ apiUser)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _controllers_usuarios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/usuarios.js */ \"./src/controllers/usuarios.js\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\r\nconst {Router} = express__WEBPACK_IMPORTED_MODULE_0__ //se importa la funcion router\r\nconst apiUser = Router();\r\n\r\n\r\n\r\n\r\n\r\n\r\n//passport config\r\npassport__WEBPACK_IMPORTED_MODULE_2__.use(\"login\", new passport_local__WEBPACK_IMPORTED_MODULE_3__.Strategy(_controllers_usuarios_js__WEBPACK_IMPORTED_MODULE_1__.login));\r\npassport__WEBPACK_IMPORTED_MODULE_2__.use(\"signup\" ,new passport_local__WEBPACK_IMPORTED_MODULE_3__.Strategy({passReqToCallback: true}, _controllers_usuarios_js__WEBPACK_IMPORTED_MODULE_1__.signup));\r\n\r\n\r\npassport__WEBPACK_IMPORTED_MODULE_2__.serializeUser(_controllers_usuarios_js__WEBPACK_IMPORTED_MODULE_1__.serializeUser);\r\npassport__WEBPACK_IMPORTED_MODULE_2__.deserializeUser(_controllers_usuarios_js__WEBPACK_IMPORTED_MODULE_1__.deserializeUser);\r\n\r\n\r\n//POST\r\napiUser.post('/signup', passport__WEBPACK_IMPORTED_MODULE_2__.authenticate(\"signup\", { failureRedirect: ''}), _controllers_usuarios_js__WEBPACK_IMPORTED_MODULE_1__.postSignup);\r\napiUser.post(\"/login\",passport__WEBPACK_IMPORTED_MODULE_2__.authenticate(\"login\", {failureRedirect: ''}), _controllers_usuarios_js__WEBPACK_IMPORTED_MODULE_1__.postLogin); \r\n//GET\r\napiUser.get('/logout', _controllers_usuarios_js__WEBPACK_IMPORTED_MODULE_1__.logout);\r\napiUser.get('/login', _controllers_usuarios_js__WEBPACK_IMPORTED_MODULE_1__.loginPage);\r\napiUser.get('/signup', _controllers_usuarios_js__WEBPACK_IMPORTED_MODULE_1__.signupPage);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://sockets/./src/routes/userRoutes.js?");

/***/ }),

/***/ "./src/utils/auth.js":
/*!***************************!*\
  !*** ./src/utils/auth.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authorization\": () => (/* binding */ authorization)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.js */ \"./src/config/config.js\");\n\r\n\r\n\r\nfunction authorization (req, res, next){\r\n  if(!req.session.active && !req.isAuthenticated()) {\r\n    console.log('no hay session')\r\n    req.session.user = {nombre: 'Guest'}\r\n    req.session.active = true;\r\n    req.session.token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign('Guest', _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].claveSecreta);\r\n    next(); //false indica que no esta loggeado por lo que es un guest\r\n  } \r\n  else{\r\n    console.log('hay session')\r\n    console.log(req.session.user)\r\n    const token = req.session.token;\r\n    if(token != undefined && req.isAuthenticated()){ //req.session.user != undefined req.isAuthenticated() devuelve true si el usuario inicio sesion\r\n        jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify(token, _config_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].claveSecreta, (err, data) =>{\r\n          if(err){\r\n            res.status(403).send('Invalid Token o error al validarlo')\r\n          }\r\n          else{\r\n            req.session.logged = true; //indica que esta loggeado por lo que es \r\n            next();\r\n          }\r\n        });\r\n      }\r\n      else if(token != undefined && !req.isAuthenticated()){\r\n        req.session.logged = false;\r\n        next();\r\n      }\r\n      else{\r\n        res.status(403).send('Unouthorized, token missing or user not logged in');\r\n      }\r\n  }\r\n\r\n}\r\n\r\n  \n\n//# sourceURL=webpack://sockets/./src/utils/auth.js?");

/***/ }),

/***/ "./src/utils/dbConnect.js":
/*!********************************!*\
  !*** ./src/utils/dbConnect.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connect-mongo */ \"connect-mongo\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.js */ \"./src/config/config.js\");\n\r\n\r\n\r\n\r\n\r\nasync function connect(app){\r\n    try{\r\n        \r\n        mongoose__WEBPACK_IMPORTED_MODULE_2__.connect(_config_config_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].uriString);\r\n\r\n        await app.use(express_session__WEBPACK_IMPORTED_MODULE_1__({ //Base de datos Mongo\r\n                secret: _config_config_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].claveSecreta, \r\n                resave: false,\r\n                saveUninitialized: false,\r\n                store: connect_mongo__WEBPACK_IMPORTED_MODULE_0__.create({ \r\n                    mongoUrl: _config_config_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].uriString,\r\n                    //mongoOptions, \r\n                    retries: 0,\r\n                    ttl: 60 * 60 * 24\r\n                })\r\n            }));\r\n        //console.log(mongoose.connection.readyState);\r\n    }\r\n\r\n    catch(err){\r\n        throw(new Error(`Error al conectarse a la base de datos ${err}`))\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n\n//# sourceURL=webpack://sockets/./src/utils/dbConnect.js?");

/***/ }),

/***/ "./src/utils/hash.js":
/*!***************************!*\
  !*** ./src/utils/hash.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comparePassword\": () => (/* binding */ comparePassword),\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\r\n\r\n\r\n  const hashPassword =  (password)=> {\r\n    return bcrypt__WEBPACK_IMPORTED_MODULE_0__.hashSync(password, bcrypt__WEBPACK_IMPORTED_MODULE_0__.genSaltSync(10), null);\r\n  }\r\n  const comparePassword =  (password, hash) => {\r\n    return bcrypt__WEBPACK_IMPORTED_MODULE_0__.compareSync(password, hash);\r\n  }\r\n\r\n\n\n//# sourceURL=webpack://sockets/./src/utils/hash.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;