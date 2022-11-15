const { getToken, validateToken } = require("../util/auth.util")
const axios = require('axios');
const Roles = require("../model/roles");

const addUser = async  (body)=>{
 let wso2IAM = await getToken('internal_user_mgt_create')

 var options = {
    method: 'POST',
    url: 'https://api.asgardeo.io/t/sliit98/scim2/Users',
    headers: {'Content-Type': 'application/scim+json' , 'Authorization': 'Bearer ' + wso2IAM},
    data: body.data
  };

  let res = await axios(options)
  const role = new Roles({
    userID:res.data.id,
    role:body.role

  })
  let roleRes = await role.save();
  return res.data ;

}

const getUserDetails = async (token) =>{
    let res =  await validateToken(token)
    let user = await Roles.findOne({userID:res.sub})
    //console.log(res)
    let userDetails = {
        id:res.sub,
        role:user.role
    }
    return user

}

module.exports = {
    addUser,
    getUserDetails

};