const userModel = require('../model/user.js')
const user = {name:'heizi',password:123456,avator:'kitty',date:'2020/05/07',rights:1}

exports.registered = async ctx =>{
    let {name,password} = user;
    await userModel.insertData(user).then(result =>{
        let res = result;
        console.log(res);
    }).catch(abc=>{
        console.log(abc)
    })
}