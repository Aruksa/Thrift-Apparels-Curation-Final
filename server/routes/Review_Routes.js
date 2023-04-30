const router = require('express').Router();
const {getreview, addreview} = require("../controllers/Review_Controllers");

router.get("/", getreview)

router.post("/create", addreview)

module.exports = router;