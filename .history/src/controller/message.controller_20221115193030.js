const Message = require("../model/message.model");
const crypto = require('crypto');


const addNewMessage = async (req, res) => {
  if (req.body) {
    try {
      const titles = req.body.title;
      const descriptions = req.body.description;
      const dates = req.body.date;

      const cipertitle = crypto.createCipher('aes192', 'a title');
      const ciperdescription = crypto.createCipher('aes192', 'a description');
      const ciperdate = crypto.createCipher('aes192', 'a date');

      var title = cipertitle.update(titles, 'utf8', 'hex');
      var description = ciperdescription.update(descriptions, 'utf8', 'hex');
      var date = ciperdate.update(dates, 'utf8', 'hex');

      title = title + cipertitle.final('hex');
      description = description + ciperdescription.final('hex');
      date = date + ciperdate.final('hex');

      const newMessage = new Message({
        title,
        description,
        date
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
      const deciphertitle = crypto.createDecipher('aes192', 'a title');
      const decipherdescription = crypto.createDecipher('aes192', 'a description');
      const decipherdate = crypto.createDecipher('aes192', 'a date');

      var encryptedTitle = Message.title;
      var encryptedDescription = Message.description;
      var encryptedDate = Message.date;

      var decryptedTitle = deciphertitle.update(encryptedTitle, 'hex', 'utf8');
      decryptedTitle = decryptedTitle + deciphertitle.final('utf8');

      var decryptedDescription = decipherdescription.update(encryptedDescription, 'hex', 'utf8');
      decryptedDescription = decryptedDescription + decipherdescription.final('utf8');

      var decryptedDate = decipherdate.update(encryptedDate, 'hex', 'utf8');
      decryptedDate = decryptedDate + decipherdate.final('utf8');

      console.log(decryptedTitle);
      console.log(decryptedDescription);
      console.log(decryptedDate);


      res.status(200).send(decryptedTitle);
     

    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with get Message", error: err.message });
    });
};

const deleteMessage = async (req, res) => {
  const id = req.params.id;
  await Message.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Message deleted" });
    }).catch((errr) => {
      console.log(err.messege);
      res.status(500).send({ status: "Error with delete Message", error: err.messege });
    })


}


module.exports = {
  deleteMessage,
  addNewMessage,
  getAllMessages,
  getMessageByID,

};