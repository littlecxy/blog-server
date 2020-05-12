// 发表评论
const query = require('../dbconnect/index.js')
exports.insertData = ( value ) => {
    let _sql = "insert into comment set parentid=?,content=?,date=?,type=?,aid=?,uid=?,reserved=?"
    return query( _sql, value)
  }