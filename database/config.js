const mongoose = require('mongoose');


const dbConnection = async() => {
    try {

       await mongoose.connect( process.env.DB_CNN_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
       });

       console.log('DB ONLINE!');
        
    } catch (error) {
        console.log(error)
        throw new Error('Error en la base de datos - VER LOS LOGs')
    }
}

module.exports = {
    dbConnection
}