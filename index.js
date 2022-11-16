require('dotenv').config();
const https = require('https');
const fs = require('fs');

const app = require('./server');
const PORT = process.env.PORT || 8070;
const options = {
  key: fs.readFileSync('./localhost-key.pem'), // Replace with the path to your key
  cert: fs.readFileSync('./localhost.pem') // Replace with the path to your certificate
}

// app.listen(PORT, () => {
//   console.log("Backend Started " + PORT);
// });

https.createServer(options, app).listen(PORT,() => {
  console.log('Server listening on port ' + PORT);
});