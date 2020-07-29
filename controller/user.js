const userModel = require('../model/user.js')
// const user = ['admin','123456','kitty','2020/05/07',1,'675427776@qq.com']

exports.registered = async ctx =>{
    console.log('参数为:'+ ctx.request.body)
    await userModel.insertData(ctx.request.body).then(result =>{
        ctx.body = {status: 'OK'};
    }).catch(err=>{
        console.log(err)
    })
}

exports.login = async ctx =>{
    console.log('参数为:'+ ctx.request.body);
    await userModel.login(ctx.request.body).then(result =>{
    ctx.body = result;
    }).catch(err=>{
        console.log(err)
    })
}