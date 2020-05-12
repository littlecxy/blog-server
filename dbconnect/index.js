const mysql = require('mysql');
const dbconfig = require('../config/index.js')

const pool  = mysql.createPool({
  host     : dbconfig.database.HOST,
  user     : dbconfig.database.USERNAME,
  password : dbconfig.database.PASSWORD,
  database : dbconfig.database.DATABASE,
  port     : dbconfig.database.PORT
});

let query = ( sql, values ) => {

  return new Promise(( resolve, reject ) => {
    pool.getConnection( (err, connection) => {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })

}

let user =
    `create table if not exists user(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL COMMENT '用户名',
     password VARCHAR(100) NOT NULL COMMENT '密码',
     avator VARCHAR(100) NOT NULL COMMENT '头像',
     date VARCHAR(100) NOT NULL COMMENT '注册时间',
     rights INT NOT NULL COMMENT '权限',
     email VARCHAR(50) NOT NULL COMMENT '邮箱',
     PRIMARY KEY ( id )
    );`

let article =
    `create table if not exists article(
     id INT NOT NULL AUTO_INCREMENT,
     title TEXT(0) NOT NULL COMMENT '文章标题',
     content TEXT(0) NOT NULL COMMENT '文章内容',
     md TEXT(0) NOT NULL COMMENT 'markdown',
     uid INT NOT NULL COMMENT '用户id',
     date VARCHAR(100) NOT NULL COMMENT '发表时间',
     pv INT NOT NULL DEFAULT '0' COMMENT '浏览量',
     species INT NOT NULL COMMENT '文章种类',
     reserved VARCHAR(50) COMMENT '预留字段',
     PRIMARY KEY(id)
    );`

let comment =
    `create table if not exists comment(
     id INT NOT NULL AUTO_INCREMENT,
     parentid INT NOT NULL COMMENT '父评论id',
     content TEXT(0) NOT NULL COMMENT '评论内容',
     date VARCHAR(40) NOT NULL COMMENT '评论时间',
     type INT NOT NULL COMMENT '类型',
     aid INT NOT NULL COMMENT '文章id',
     uid INT NOT NULL COMMENT '用户id',
     reserved VARCHAR(50) NOT NULL COMMENT '预留字段',
     PRIMARY KEY(id) 
    );`

let createTable = ( sql ) => {
  return query( sql, [] )
}
// 建表
createTable(user)
createTable(article)
createTable(comment)

module.exports = query


// 注册用户
// exports.insertData = ( value ) => {
//     let _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
//     return query( _sql, value )
//   }