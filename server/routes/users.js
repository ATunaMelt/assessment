var express = require('express');
var router = express.Router();
const { Chat, User } = require('../db/models');

//Read All
router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
});

// Create One
router.post('/', async (req, res, next) => {
  console.log(req.body);
  try {
    const { name, password } = req.body;
    const newUser = { name: name, password: password };
    const userCreated = await User.create(newUser);
    // if (req.body.WarehouseId) userCreated.setWarehouse(req.body.WarehouseId);
    res.json(userCreated);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
