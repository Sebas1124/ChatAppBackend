const mensaje = require("../models/mensaje");


const ObtenerChat = async( req, res ) => {

    const miId = req.uid;
    const mensajesDe = req.params.de;

    const last30 = await mensaje.find({
        $or: [
            {de: miId, para: mensajesDe},
            {de: mensajesDe, para: miId},
        ]
    })
    .sort({ createdAT: 'asc' })
    .limit(30);

    res.json({
        ok: true,
        miId,
        mensajesDe,
        mensajes: last30
    })


}

module.exports = {
    ObtenerChat
}