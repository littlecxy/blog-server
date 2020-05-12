const router = require('koa-router')()
const commentHandle = require('../controller/comment')
router.prefix('/comment')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a comment response!';
  commentHandle.registered();
  console.log('sql执行完毕')
})

module.exports = router