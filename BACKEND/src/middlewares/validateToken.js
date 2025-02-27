import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'

const authRequired = (req, res, next) => {
    const { token } = req.cookies;
     if (!token) return res.status(401).json({ message: "No hay token, autorizacion denegada"});

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "token invalidoo"});
        req.user = user 
        console.log(user)
        next();

    }) 
}

export {authRequired}
    