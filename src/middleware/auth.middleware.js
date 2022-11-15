const { getUserDetails } = require("../service/userService");
const { validateToken } = require("../util/auth.util");

let verifyToken = async (req,res,next) =>{

    let token = req.headers["token"];
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }

    let result = await validateToken(token)
    if(result && result.active){

        if(req.baseUrl === '/file'){
            let user = getUserDetails(token)
            if(user.role != 'manager'){
                return res.status(401).send({ message: "Unauthorized! Incufficent permission to access file operations" });
            }
        }
        next();
    }else{
        return res.status(401).send({ message: "Unauthorized!" });
    }
};

module.exports = verifyToken