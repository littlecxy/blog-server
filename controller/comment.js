const commentModle = require('../model/comment')
const comment = ['1','comment','2020/05/12',1,1,1,'null'];

exports.registered = async ctx =>{
    await commentModle.insertData(comment).then(result =>{
        let res = result;
        console.log(res);
    }).catch(err=>{
        console.log(err)
    })
}