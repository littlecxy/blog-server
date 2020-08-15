// 发表评论
const query = require('../dbconnect/index.js')
exports.insertData = ( value ) => {
    let _sql = "insert into comment set parentid=?,content=?,date=?,type=?,aid=?,uid=?,reserved=?"
    return query( _sql, value)
  }

exports.findData = ( value ) => {
  let _sql = "select user.avator,user.name,comment.date,comment.content from user,comment where user.id = comment.uid and aid = ? order by comment.date desc"
  return query( _sql, value)
}