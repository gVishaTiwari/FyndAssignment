const express = require('express');

const router = express.Router();
router.use('/',require('./Movies'));
router.use('/user',require('./user'));

router.use('/movies',require('./Movies'));


module.exports = router;