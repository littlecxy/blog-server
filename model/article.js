const query = require('../dbconnect/index.js')
// 发表文章
exports.insertData = ( value ) => {
    let _sql = "insert into article set title=?,content=?,md=?,date=?,pv=?,species=?,reserved=?"
    return query( _sql, value)
  }
// 查询所有文章
exports.selectData = ( value ) => {
  let _sql = "select * from article order by date desc"
  return query( _sql, value)
}  

// 根据类型查询文章
exports.selectDataByType = ( value ) => {
  let _sql = "select * from article where species=? order by date desc"
  return query( _sql, value)
}  