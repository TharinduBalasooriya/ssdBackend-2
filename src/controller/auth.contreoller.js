const { addUser, getUserDetails } = require("../service/userService");
const { getToken } = require("../util/auth.util");

const SignUP = async (req, res) => {
    if (req.body) {
      try {
       
        let result = await addUser(req.body)
        res.status(200).json({ result});
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  };

const me = async (req,res) =>{
  if(req.body){
    try {
      let token = req.headers["token"];
      if (!token) {
        return res.status(403).send({ message: "No token provided!" });
      }
      let result = await getUserDetails(token)
      res.status(200).json({ result});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
  module.exports = {
    SignUP,
    me
 
  };