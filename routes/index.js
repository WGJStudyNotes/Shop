var express = require('express');
var router = express.Router();
var welcome=require('../controllers/welcome');
/* GET home page. */
router.get('/',welcome.index);
router.get('/login',welcome.login);
router.get('/checkLogin',welcome.checkLogin);
router.post('/login',welcome.checklogin);
router.get('/regist',welcome.regist);
module.exports = router;
