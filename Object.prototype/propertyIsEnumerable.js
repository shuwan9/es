let aoo = {
  bar: 'bar'
}
Object.defineProperty(aoo, 'car', {
  enumerable: false
})
Object.defineProperty(Object.prototype, 'coo', {
  enumerable: true
})
console.log(aoo.propertyIsEnumerable === Object.prototype.propertyIsEnumerable)
console.log(aoo.propertyIsEnumerable('bar'))
console.log(aoo.propertyIsEnumerable('car'))

for (let key in aoo) {
  console.log(key)
}
for (let key in aoo) {
  if (aoo.hasOwnProperty(key)) {
    console.log(key)
  }
}
