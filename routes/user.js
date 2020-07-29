const fs = require('fs');
const path = require('path')
const router = require('koa-router')()
const userHandle = require('../controller/user.js')
router.prefix('/user')
// 测试接口
router.post('/', function (ctx, next) {
  // ctx.body = 'this is a user response!';
  // console.log('参数'+ctx.request.body.value)
  // userHandle.registered(ctx.request.body.value);
  console.log('sql执行完毕')
})
// 文件上传
router.post('/uploadfile', async (ctx, next) => {
  // 上传单个文件
  const file = ctx.request.files.file; // 获取上传文件
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  return ctx.body = "上传成功！";
});

// 注册
router.post('/register',userHandle.registered);
// 登录
router.post('/login',userHandle.login);

module.exports = router
