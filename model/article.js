const query = require('../dbconnect/index.js')
// 发表文章
exports.insertData = ( value ) => {
    let _sql = "insert into article set title=?,content=?,md=?,date=?,pv=?,species=?,reserved=?"
    return query( _sql, value)
  }
// 查询所有文章
exports.selectData = ( value ) => {
  let _sql = "select * from article"
  return query( _sql, value)
}  