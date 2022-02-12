var express = require('express');
const { send } = require('process');
var router = express.Router();
const { Chat, Content } = require('../db/models');

// This route retrives all chats we are in
router.get('/', async (req, res, next) => {
  try {
    const allChats = await Chat.findAll();
    res.json(allChats);
  } catch (error) {
    next(error);
  }
});

// Send a new message to a specific chat
router.post('/:chatId', async (req, res, next) => {
  try {
    w;
    let chatId = Number(req.params.chatId);
    const body = { ...req.body };
    body.sender = Number(body.sender);

    // When sending a message, we first need to know what chat to add it to.
    // We assume that infomation was included, otherwise its a new Chat
    let chat = await Chat.findOrCreate({ where: { id: chatId } });
    chat = chat[0];
    chatId = chat.id;

    // Create the message row in our content table
    let message = await Content.create({
      msg: body.contents,
      sender: body.sender
    });

    // Add the newly created message to our chat table
    await message.setChat(chatId);

    // We then return the newly "sent" message back to the front end
    res.json(message);
  } catch (error) {
    next(error);
  }
});

// This route retrives all messages from a single chat
router.get('/:chatId', async (req, res, next) => {
  try {
    const chatId = Number(req.params.chatId);
    const allChats = await Content.findAll({ where: { ChatId: chatId } });
    res.json(allChats);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
