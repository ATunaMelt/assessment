var express = require('express');
const { send } = require('process');
var router = express.Router();
const { Chat, User, Content } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const allChats = await Chat.findAll();
    res.json(allChats);
  } catch (error) {
    next(error);
  }
});

//send a new messgae
router.post('/', async (req, res, next) => {
  try {
    const { contents, senderPK, receiverPK } = req.body;
    const newChat = {
      contents: contents,
      sender: Number(senderPK),
      receiver: receiverPK,
    };
    console.log(newChat);
    let createdChat = await User.findByPk(newChat.sender);
    res.json(createdChat);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
