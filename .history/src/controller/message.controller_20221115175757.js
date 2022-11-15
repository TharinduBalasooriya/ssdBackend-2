const Message = require("../model/message.model");
const crypto = require('crypto');
const ciper = crypto.createCipher('aes192', 'a title');
const ciperr = crypto.createCipher('aes192', 'a description');
const ciperrr = crypto.createCipher('aes192', 'a date');

const addNewMessage = async (req, res) => {
  if (req.body) {
    try {
      const titles = req.body.title;
      const descriptions = req.body.description;
      const dates = req.body.date;
     

      var title = ciper.update(titles, 'utf8', 'hex');
      var description = ciperr.update(descriptions, 'utf8', 'hex');
      var date = ciperrr.update(dates, 'utf8', 'hex');

      title=title+ciper.final('hex');
      description=description+ciperr.final('hex');
      date=date+ciperrr.final('hex');
     
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
      res.status(200).send(Message);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with get Message", error: err.message });
    });
};

const deleteMessage=async(req,res)=>{
  const id = req.params.id;
  await Message.findByIdAndDelete(id)
    .then(() =>{
        res.status(200).send({status: "Message deleted"});
    }).catch((errr) => {
        console.log(err.messege);
        res.status(500).send({status: "Error with delete Message", error: err.messege});
    })


}


module.exports = {
  deleteMessage,
  addNewMessage,
  getAllMessages,
  getMessageByID,

};