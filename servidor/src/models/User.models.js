const mongoose = require('mongoose')

const{Schema} = mongoose

const UserSchema = new Schema({

    name: {type:String, required:[true, "El nombre es necesario"]},
    surname: {type:String, required:[true, "El apellido es necesario"]},
    email: {type:String, required:[true, "Es necesario una direccion de correo"]},
    password: {type:String, required:[true, "La contraseña es necesaria"]},
    birthdate: {type:Date, required:[true, "La fecha de nacimiento es necesaria"]},
    last_start_date: {type:Date, default: Date.now},
    status: {type:String, default:'Activo'},
    
})

module.exports = mongoose.model('user', UserSchema)