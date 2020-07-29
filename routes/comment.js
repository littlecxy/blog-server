const router = require('koa-router')()
const commentHandle = require('../controller/comment')
router.prefix('/comment')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a comment response!';
  commentHandle.registered();
  console.log('sql执行完毕')
})

// 发表评论
router.post('/postComment',commentHandle.postComment);
// 查询评论
router.post('/findComment',commentHandle.findComment);
module.exports = router