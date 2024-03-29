const router = require('express').Router();
const User = require('../models/User');

// register

router.post('/Register', async(req, res)=> {
  const {name, email, password} = req.body;

  try {
    const user = await User.create({name, email, password});
    res.status(201).json(user);
  } catch (e) {
    if(e.code === 11000) return res.status(400).send('Email already exists');
    res.status(400).send(e.message)
  }
})

// login

router.post('/Log_In', async(req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.crosscheck(email, password);
    res.status(200).json(user)
  } catch (e) {
    res.status(400).send(e.message)
  }
})


module.exports = router;
