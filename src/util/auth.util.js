const qs = require('qs');
const url = require('url');
const axios = require('axios');


const getToken = async (scope) => {

    const params = new url.URLSearchParams({ 'grant_type': 'client_credentials', scope: scope });
    let res = await axios.post('https://api.asgardeo.io/t/sliit98/oauth2/token', params.toString(), {
        auth: {
            username: '0CJLSA9IBLQtq2mLl1sQMZlipWEa',
            password: 'amKZtpTDdWUNnOCexZhjoLaVGoQa'
        }
    });



    return res.data.access_token

}


const validateToken = async(token) =>{

    const params = new url.URLSearchParams({ 'token': token});
    let res = await axios.post('https://api.asgardeo.io/t/sliit98/oauth2/introspect', params.toString(), {
        auth: {
            username: '0CJLSA9IBLQtq2mLl1sQMZlipWEa',
            password: 'amKZtpTDdWUNnOCexZhjoLaVGoQa'
        }
    });
    return res.data
}

module.exports = {
    getToken,
    validateToken

};