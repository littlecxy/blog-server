const commentModle = require('../model/comment')
const comment = ['1','comment','2020/05/12',1,1,1,'null'];
// 
exports.postComment = async ctx =>{
    console.log('参数为'+ctx.request.body);
    await commentModle.insertData(ctx.request.body).then(result =>{
        let res = result;
        ctx.body = {status:'OK'};
    }).catch(err=>{
        console.log(err)
    })
}

exports.findComment = async ctx =>{
    console.log('参数为'+ctx.request.body);
    await commentModle.findData(ctx.request.body).then(result =>{
        ctx.body = result;
    }).catch(err=>{
        console.log(err)
    })
}