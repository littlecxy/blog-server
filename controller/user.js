const userModel = require('../model/user.js')
// const user = ['admin','123456','kitty','2020/05/07',1,'675427776@qq.com']

exports.registered = async ctx =>{
    console.log('参数为:'+ ctx)
    await userModel.insertData(ctx).then(result =>{
        let res = result;
        console.log(res);
    }).catch(err=>{
        console.log(err)
    })
}