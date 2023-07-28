const ChatModel = require("../../../models/model.message");

class ChatManager {
  saveMessage = async (message) => {
    try {
      const newMessage = await ChatModel.create(message);

      return "Message saved";
    } catch (err) {
      return err;
    }
  };

  getMessages = async () => {
    try {
      const messages = await ChatModel.find();

      return messages;
    } catch (err) {
      console.log("No messages");

      return [];
    }
  };
}

module.exports = ChatManager;