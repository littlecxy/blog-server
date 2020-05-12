const articleModle = require('../model/article')
const article = ['javascript','This is js article','markdown',1,'2020/05/12',1,1,''];

exports.registered = async ctx =>{
    await articleModle.insertData(article).then(result =>{
        let res = result;
        console.log(res);
    }).catch(err=>{
        console.log(err)
    })
}