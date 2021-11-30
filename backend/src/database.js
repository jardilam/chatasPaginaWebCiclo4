const mongoose = require('mongoose');

const uri = 'mongodb+srv://user_jadt:Julio9502@comienzomongo.ibuqh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const options = {useNewUrlParser: true,  useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) } 
);

module.exports=mongoose