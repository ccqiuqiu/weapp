/**
 * Created by 熊超超 on 2018/9/20.
 */

// 日期判断
export function isDate(obj) {
  return Object.prototype.toString.call(obj) === '[object Date]'
}
// 对象判断
export function isObj(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
// 空对象判断
export function isEmptyObject(obj) {
  return isObj(obj) && Object.keys(obj).length <= 0
}
