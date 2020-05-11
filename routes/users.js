const router = require('koa-router')()
const userHandle = require('../controller/index.js')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!';
  userHandle.registered();
  console.log('sql执行完毕')
})

module.exports = router
