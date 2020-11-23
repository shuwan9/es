function* foo() {
  yield 1
  yield 2
  yield 3
}
for (const aoo of foo()) {
  console.log(aoo)
}
