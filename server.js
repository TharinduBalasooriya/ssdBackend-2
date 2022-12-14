let express = require("express");
const cors = require("cors");
let mongoose = require("mongoose");
require("dotenv").config();
let messageApi = require("./src/api/message.api");
let fileApi = require("./src/api/file.api");
let authApi = require("./src/api/auth.api")
const { urlencoded } = require("express");


let app = express();



app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send('<h1>HTTPS Works!</h1>');
  });
  
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  
  app.use(express.json());
  app.use("/message", messageApi);
  app.use("/file", fileApi);
  app.use("/user", authApi);
mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;
if (!db) {
  console.log("Connection - error");
} else{
    console.log("Connected")
}

module.exports = app;