const articleModle = require('../model/article')
// const article = ['javascript','This is js article','markdown',1,'2020/05/12',1,1,''];

// 发表文章
exports.postArticle = async ctx =>{
    console.log('参数为'+ctx.request.body);
    await articleModle.insertData(ctx.request.body).then(result =>{
        ctx.body = result;
    }).catch(err=>{
        console.log(err)
    })
}

// 查询文章
exports.findArticle = async ctx =>{
    await articleModle.selectData().then(result =>{
        ctx.body = result;
    }).catch(err=>{
        console.log(err)
    })
}