const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

class authMiddlewares {

    async protect(req,res,next){
        if (req.headers.authorization){
            try {
                const decodedToken = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
                req.user = { _id: decodedToken._id};
                next();
            }
            catch {
                res.status(401)
                throw new Error('Not authorized, token failed') ;              
            }
        }
        else {
            res.status(401);
            throw new Error("Not authorization, no token");
        }
    }

};

module.exports = new authMiddlewares;