const fs = require('fs');
const path = require('path')

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

exports.uploadfile = async ctx => { 
    // 上传单个文件
    const file = ctx.request.body.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.resolve(__dirname, '../public/upload') + `/${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    return ctx.body = filePath; 
  };

  exports.uploadimg = async ctx => { 
    // 上传单个文件
    const file = ctx.request.body.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.resolve(__dirname, '../public/upload') + `/${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    return ctx.body = "上传成功！"; 
  };