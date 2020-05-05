const mysql = require('mysql');
const dbconfig = require('../config/index.ts')

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

// let users =
//     `create table if not exists users(
//      id INT NOT NULL AUTO_INCREMENT,
//      name VARCHAR(100) NOT NULL COMMENT '用户名',
//      pass VARCHAR(100) NOT NULL COMMENT '密码',
//      avator VARCHAR(100) NOT NULL COMMENT '头像',
//      moment VARCHAR(100) NOT NULL COMMENT '注册时间',
//      PRIMARY KEY ( id )
//     );`

// let posts =
//     `create table if not exists posts(
//      id INT NOT NULL AUTO_INCREMENT,
//      name VARCHAR(100) NOT NULL COMMENT '文章作者',
//      title TEXT(0) NOT NULL COMMENT '评论题目',
//      content TEXT(0) NOT NULL COMMENT '评论内容',
//      md TEXT(0) NOT NULL COMMENT 'markdown',
//      uid VARCHAR(40) NOT NULL COMMENT '用户id',
//      moment VARCHAR(100) NOT NULL COMMENT '发表时间',
//      comments VARCHAR(200) NOT NULL DEFAULT '0' COMMENT '文章评论数',
//      pv VARCHAR(40) NOT NULL DEFAULT '0' COMMENT '浏览量',
//      avator VARCHAR(100) NOT NULL COMMENT '用户头像',
//      PRIMARY KEY(id)
//     );`

// let comment =
//     `create table if not exists comment(
//      id INT NOT NULL AUTO_INCREMENT,
//      name VARCHAR(100) NOT NULL COMMENT '用户名称',
//      content TEXT(0) NOT NULL COMMENT '评论内容',
//      moment VARCHAR(40) NOT NULL COMMENT '评论时间',
//      postid VARCHAR(40) NOT NULL COMMENT '文章id',
//      avator VARCHAR(100) NOT NULL COMMENT '用户头像',
//      PRIMARY KEY(id) 
//     );`

// let createTable = ( sql ) => {
//   return query( sql, [] )
// }
// // 建表
// createTable(users)
// createTable(posts)
// createTable(comment)

module.exports = query


// 注册用户
// exports.insertData = ( value ) => {
//     let _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
//     return query( _sql, value )
//   }