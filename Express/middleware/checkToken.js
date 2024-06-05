const jwt = require('jsonwebtoken');

// Middleware para verificar si el token es válido
const checkToken = (req, res, next) => {    
    if (!req.headers['authorization']) {
        console.log('Not Authorized');
        return res.json({ error: 'Not Authorized' });
    }
    try {
        let token = req.headers['authorization'].split(' ')[1];        
        jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        console.log('Not Authorized catch');
        return res.json({ error: 'Not Authorized' });
    }
    next();

}

module.exports = { checkToken };