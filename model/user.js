// 注册用户
const query = require('../dbconnect/index.js')
exports.insertData = ( value ) => {
    let _sql = "insert into user set name=?,password=?,avator=?,date=?,rights=?,email=?"
    return query( _sql, value)
    
  }

  exports.login = ( value ) => {
    let _sql = "select * from user where email=? and password=?"
    return query( _sql, value)
  }