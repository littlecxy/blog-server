const router = require('koa-router')()
const userHandle = require('../controller/user.js')
router.prefix('/user')

router.post('/', function (ctx, next) {
  ctx.body = 'this is a user response!';
  console.log('参数'+ctx.request.body.value)
  userHandle.registered(ctx.request.body.value);
  console.log('sql执行完毕')
})

module.exports = router
