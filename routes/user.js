const fs = require('fs');
const path = require('path')
const multer = require('koa-multer');
const router = require('koa-router')()
const userHandle = require('../controller/user.js')
router.prefix('/user')
// 测试接口
router.post('/', function (ctx, next) {
  // ctx.body = 'this is a user response!';
  // console.log('参数'+ctx.request.body.value)
  // userHandle.registered(ctx.request.body.value);
  console.log('sql执行完毕');
})
// 文件上传
router.post('/uploadfile',userHandle.uploadfile);
// 注册
router.post('/register',userHandle.registered);
// 登录
router.post('/login',userHandle.login);
// markdown文件上传
router.post('/uploadimg',userHandle.uploadimg);

module.exports = router