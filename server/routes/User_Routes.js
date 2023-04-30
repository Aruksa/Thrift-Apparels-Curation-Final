const router = require('express').Router();
const {register,login} = require('../controllers/User_Controllers');

// register

router.post('/Register',register)

// login

router.post('/Log_In', login)


module.exports = router;
