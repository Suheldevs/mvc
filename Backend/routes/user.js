const express = require('express');
const {handlePost}= require('../controller/user')
const router = express.Router();

router.post('/post',handlePost);

module.exports = router;