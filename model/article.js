// 发表文章
const query = require('../dbconnect/index.js')
exports.insertData = ( value ) => {
    let _sql = "insert into article set title=?,content=?,md=?,uid=?,date=?,pv=?,species=?,reserved=?"
    return query( _sql, value)
    
  }