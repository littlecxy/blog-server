const router = require('koa-router')()
const articleHandle = require('../controller/article')
router.prefix('/article')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a article response!';
  articleHandle.registered();
  console.log('sql执行完毕')
})

// 发表文章
router.post('/postArticle',articleHandle.postArticle);
// 获取文章
router.post('/findArticle',articleHandle.findArticle);
// 按照类型获取文章列表
router.post('/findArticleByType',articleHandle.findArticleByType);
module.exports = router