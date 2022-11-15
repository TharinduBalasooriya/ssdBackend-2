const Message = require("../model/message.model");

const addNewMessage = async (req, res) => {
  if (req.body) {
    try {
      let result = await Message.create(req.body);
      res.status(200).json({ result });
    } catch (error) {
      res.status(400).json({ error: err.message });
    }
  }
};

const getAllMessages = async (req, res) => {
  await Message.find()
    .then((data) => {
      res.status(200).send(data);
      console.log("Success");
    })
    .catch((err) => {
      res.status(500).send({ error: err.message });
    });
};

const getMessageByID = async (req, res) => {
  const id = req.params.id;
  await Message.findById(id)
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
    addNewMessage,
    getAllMessages,
    getMessageByID,
 
  };