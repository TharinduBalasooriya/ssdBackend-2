const Message = require("../model/message.model");

const addNewMessage = async (req, res) => {
  if (req.body) {
    try {
      const title = req.body.title;
      const description = req.body.description;
      const date = req.body.date;
      const crypto = require('crypto');
      const ciper = crypto.createCipher('aes192', 'a title');
      const ciperr = crypto.createCipher('aes192', 'a description');
      const ciperrr = crypto.createCipher('aes192', 'a date');

      var encryptedTitle = ciper.update(title, 'utf8', 'hex');
      var encrypteDescription = ciperr.update(description, 'utf8', 'hex');
      var encryptedDate = ciperrr.update(date, 'utf8', 'hex');

      encryptedTitle=encrypted+ciper.final('hex');
      encrypteDescription=encryptedd+ciperr.final('hex');
      encryptedDate=encrypteddd+ciperrr.final('hex');
     
      const newMessage = new Message({
        encryptedTitle,
        encrypteDescription,
        encryptedDate
      })


      newMessage.save().then(() => {
        res.status(201).send(newMessage)
      }).catch((err) => {
        console.log(err);
      })


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