const arr = [0, 1, 2]
let iterator = arr[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

arr[Symbol.iterator] = function () {
  let len = this.length
  let i = 0
  return {
    next: () => {
      if (i >= len) {
        return {
          value: undefined,
          done: true
        }
      }
      return {
        value: this[i++],
        done: false
      }
    }
  }
}
iterator = arr[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
