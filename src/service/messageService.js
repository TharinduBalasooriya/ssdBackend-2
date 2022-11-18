const Message = require("../model/message.model");
const crypto = require('crypto');

const addMessageService = async (data) => {

    const titles = data.title;
    const descriptions = data.description;
    const date = data.date;
    const userID = data.userID;

    const cipertitle = crypto.createCipher('aes192', 'a title');
    const ciperdescription = crypto.createCipher('aes192', 'a description');

    var title = cipertitle.update(titles, 'utf8', 'hex');
    var description = ciperdescription.update(descriptions, 'utf8', 'hex');

    title = title + cipertitle.final('hex');
    description = description + ciperdescription.final('hex');

    const newMessage = new Message({
        title,
        description,
        date,
        userID
    })

    let res = await newMessage.save();
    return res;
}

module.exports = {
    addMessageService
}