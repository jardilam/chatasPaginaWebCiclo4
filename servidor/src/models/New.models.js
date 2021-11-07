const mongoose = require('mongoose')

const{Schema} = mongoose

const NewSchema = new Schema({

    name: {type: String, require: [true, "Ingrese el nombre de la noticia"]},
    description: {type: String, require: [true, "Debe ingresar el nombre de la noticia"]},
    status: {type:String, default:'Activo'},
    
})

module.exports = mongoose.model('user', NewSchema)