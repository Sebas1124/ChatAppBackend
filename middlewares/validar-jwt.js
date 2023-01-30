const jwt = require('jsonwebtoken');

const validarJWT = ( req, res, next ) => {
  
    try {

        const token = req.header('x-token');

        if ( !token ) {
            return res.status(401).json({
                ok: false,
                msg: 'No hay token en la peticion'
            });
        }

        // Verificar el token

        const { uid } = jwt.verify( token, process.env.JWT_KEY );

        req.uid = uid;

        next();
        
    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token invalido o caducado'
        });
    }


}

module.exports = {
    validarJWT
}