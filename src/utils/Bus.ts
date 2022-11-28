/*
 * @Description: 简单版发布订阅
 * @Author: ma.cq
 * @Date: 2022-11-28 12:57:42
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-11-28 13:36:00
 */

interface BusClass {
  emit: (name: string) => void
  on: (name: string, cb: Function) => void
}
type ParamsKey = string | number | symbol
type List = {
  [key: ParamsKey]: Function[]
}
class Bus implements BusClass {
  private list: List
  constructor() {
    this.list = {}
  }
  emit(name: string, ...arg: any[]) {
    const fns = this.list[name] || []
    fns.forEach((fn) => {
      fn.apply(this, arg)
    })
  }
  on(name: string, cb: Function) {
    const fns = this.list[name] || []
    fns.push(cb)
    this.list[name] = fns
  }
}

export default new Bus()
