let express = require("express");
const cors = require("cors");
let mongoose = require("mongoose");
require("dotenv").config();
let messageApi = require("./src/api/message.api");
let fileApi = require("./src/api/file.api");
const { urlencoded } = require("express");


let app = express();

const PORT = process.env.PORT || 8070;

app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("sample route");
  });
  
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  
  app.use(express.json());
  app.use("/message", messageApi);
  app.use("/file", fileApi);
mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;
if (!db) {
  console.log("Connection - error");
} else{
    console.log("Connected")
}

app.listen(PORT, () => {
  console.log("Backend Started " + PORT);
});