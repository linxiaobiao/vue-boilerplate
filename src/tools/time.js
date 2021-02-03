/**
 * 时间处理相关函数
 */

/**
 *
 * @param {Number} time 秒数，如12秒
 * @param {String} type 返回时间类型，默认返回到分，type:h,返回小时
 */
export const formatSecond = (time, type) => {
  let [h, m, s, _h, _m, _s] = [0, 0, 0, '00', '00', '00']
  h = Math.floor(time / 3600)
  time = Math.floor(time % 3600)
  m = Math.floor(time / 60)
  s = Math.floor(time % 60)
  _s = s < 10 ? '0' + s : s + ''
  _m = m < 10 ? '0' + m : m + ''
  _h = h < 10 ? '0' + h : h + ''

  // 精确到小时
  if (type === 'h') {
    return _h + ':' + _m + ':' + _s
  } else {
    return _m + ':' + _s
  }
}

/**
 * 格式化时间
 * @params {String} format 输出的日期格式
 * @params {String} date   输入的日期, 前端时间戳或者后端时间戳
 * @return {String} 返回格式化后的时间格式
 */
export const formatTime = (format, date) => {
  if (!date) {
    return ''
  }
  if (typeof date === 'number') {
    date = new Date(date * 1000)
  }
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds(),
    w: '日一二三四五六'.charAt(date.getDay())
  }
  format = format.replace(/y{4}/, date.getFullYear()).replace(
    /y{2}/,
    date
      .getFullYear()
      .toString()
      .substring(2)
  )
  for (var k in o) {
    var reg = new RegExp(k)
    format = format.replace(reg, match)
  }
  function match (m) {
    return m.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
  }
  return format
}

/**
 * 格式化时间格式，并返回时间戳
 * @params {String} timeStr 后端返回的时间字符串，如：2019-11-07 15:19:40
 * @return {String} 返回格式化后的时间戳
 */
export const timeToStamp = timeStr => {
  if (!timeStr) {
    return ''
  }

  const time = timeStr.replace(/-/g, '/')

  return new Date(time).getTime()
}
