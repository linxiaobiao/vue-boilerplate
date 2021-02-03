/*
 * 获取所有url参数对象
 * @return {Object} 参数对象集合
 */
export const getAllUrlParams = locationSearch => {
  var args = {}
  var query = locationSearch.substring(1).replace(/&amp;/g, '&') // 获取查询串，对&字符html解码处理
  var pairs = query.split('&') // 在&处断开
  for (var i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf('=') // 查找name=value
    if (pos == -1) continue // 如果没有找到就跳过
    var argName = pairs[i].substring(0, pos) // 提取name
    var value = pairs[i].substring(pos + 1) // 提取value
    args[argName] = decodeURIComponent(value) // url解码并存为属性
  }
  return args // 返回对象
}

/**
 * 获取所有url #后面的参数对象
 * @return {Object} 参数对象集合
 */
export function getHashParams (url) {
  const queryHash = url.split('?').pop() || []
  var pairs = queryHash.split('&') // 在&处断开
  const args = {}

  for (var i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf('=') // 查找name=value
    if (pos == -1) continue // 如果没有找到就跳过
    var argname = pairs[i].substring(0, pos) // 提取name
    var value = pairs[i].substring(pos + 1) // 提取value
    args[argname] = decodeURIComponent(value) // url解码并存为属性
  }
  return args
}

/**
 *
 * @param {Object} params 传进来的对象
 */
export const objectTourl = (params = {}) => {
  let result = ''
  for (const key in params) {
    result += `&${key}=${params[key]}`
  }
  return result
}

/**
 *
 * @param {String} url 原始url链接
 * @param {Object} params 要拼接的参数对象
 * @return {String} 拼接参数后的链接
 */
export function addParamsToUrl (url, params) {
  if (!url) {
    return ''
  }
  if (!params) {
    return url
  }

  const paramsStr = objectTourl(params)
  if (url.indexOf('#') > -1) {
    const hashUrl = url.split('#').pop()
    // #后面有?
    if (hashUrl.indexOf('?') > -1) {
      return `${url}${paramsStr}`
    } else {
      return `${url}?${paramsStr}`
    }
  }
  // 没有#号

  if (url.indexOf('?') > -1) {
    return `${url}${paramsStr}`
  } else {
    return `${url}?${paramsStr}`
  }
}
