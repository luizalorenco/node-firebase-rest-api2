const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = async (req, res, next) => {
    let token = req.body.token || req.query.query || req.headers['x-acess-token']
    if (token) {
    try {
        let decoded = await jwt.verify(token,config.secretKey)
        console.log(decoded)
        req.usuarioLogado = decoded
        next()
    } catch (error) {
        res.status(401).send({
            message: 'o token informado e invalido'
        })
    }
    } else {
        res.status(401).send({
            message: ' voce precisa informar um token para acessar esse recurso'
        })
    }
}