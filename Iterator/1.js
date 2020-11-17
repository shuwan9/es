class Foo {
  [Symbol.iterator]() {
    let keys = Object.keys(this)
    let len = keys.length
    let i = 0
    return {
      next: () => {
        if (i >= len) {
          return {
            done: true,
            value: undefined
          }
        }
        return {
          done: false,
          value: this[keys[i++]]
        }
      }
    }
  }
}
let foo = new Foo()
foo.a = 'afoo'
foo.b = 'bfoo'
for (let v of foo) {
  console.log(v)
}
for (let v of foo) {
  console.log(v)
}
