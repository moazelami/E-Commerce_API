const jwt = require("jsonwebtoken");

const authenticate = (req , res , next) => {
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer")){
            return res.status(401).json({
                success: false,
                message: "Authentication required"
            });
        }

        const token = authHeader.split(' ')[1];

        const verified = jwt.verify(token,process.env.SECRET);
        req.user = verified;
        next();
    }catch(err){
        return res.status(401).json({
            message: 'Invalid or expired token'
        });
    }
};

module.exports = authenticate;