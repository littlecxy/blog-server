const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const koaBody = require('koa-body');
const index = require('./routes/index')
const user = require('./routes/user')
const article = require('./routes/article')
const comment = require('./routes/comment')
const cors = require('koa2-cors');

// error handler
onerror(app)
// 文件上传
app.use(koaBody({
  multipart: true,
  formidable: {
      maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
  }
}));
// 获取静态资源路径
// app.use(static(path.join(__dirname,'public/upload')))
// 跨域请求
app.use(cors({
origin: function (ctx) {
    if (ctx.url === '/test') {
        return "*"; // 允许来自所有域名请求
    }
    return 'http://localhost:8080';
},
exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
maxAge: 5,
credentials: true,
allowMethods: ['GET', 'POST', 'DELETE'],
allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))


// json解析器
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger日志
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes路由
app.use(index.routes(), index.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(article.routes(), article.allowedMethods())
app.use(comment.routes(), comment.allowedMethods())

// error-handling 异常处理
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
