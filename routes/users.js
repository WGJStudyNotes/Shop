var express = require('express');
var router = express.Router();
var user=require('../controllers/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/regist',user.regist);
router.get('/checkUser',user.checkUser);
module.exports = router;
