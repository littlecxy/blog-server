const router = require('koa-router')()
const userHandle = require('../controller/user.js')
router.prefix('/user')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a user response!';
  userHandle.registered();
  console.log('sql执行完毕')
})

module.exports = router
