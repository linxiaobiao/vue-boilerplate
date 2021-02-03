export function to (promise) {
  return promise.then(data => ({ data })).catch(error => ({ error }))
}

export function isDef (val) {
  return val !== null && val !== undefined
}

export function debounce (fn) {
  let timeout = null // 创建一个标记用来存放定时器的返回值
  return function () {
    clearTimeout(timeout) // 每当用户输入的时候把前一个 setTimeout clear 掉
    timeout = setTimeout(() => {
      // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
      fn.apply(this, arguments) // 为了确保上下文环境为当前的this，所以不能直接用fn
    }, 600)
  }
}
