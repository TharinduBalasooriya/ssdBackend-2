const File = require("../model/file.model");

const addNewFile = async (req, res) => {
  if (req.body) {
    try {
      let result = await File.create(req.body);
      res.status(200).json({ result });
    } catch (error) {
      res.status(400).json({ error: err.message });
    }
  }
};

const getAllFile  = async (req, res) => {
  await File.find()
    .then((data) => {
      res.status(200).send(data);
      console.log("Success");
    })
    .catch((err) => {
      res.status(500).send({ error: err.message });
    });
};

const getFileByID = async (req, res) => {
  const id = req.params.id;
  await File.findById(id)
    .then((Message) => {
      res.status(200).send(Message);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with get Message", error: err.message });
    });
};
module.exports = {
    addNewFile,
    getAllFile,
    getFileByID,
 
  };