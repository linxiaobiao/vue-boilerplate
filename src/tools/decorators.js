/**
 * 装饰器文件，存放所有相关装饰器
 */

/**
 * 限制重复操作
 */
export function lockRepeat () {
  let lock = false
  return function (target, name, descriptor) {
    const fn = descriptor.value
    descriptor.value = async function (...args) {
      if (lock) {
        return
      }

      lock = true

      await fn.apply(this, args)

      lock = false
    }
  }
}
