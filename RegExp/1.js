const REG = /(^\s+)|(\s+$)/g

;['a b', '  a b', 'a b ', '  a b  '].forEach((i) => {
  console.log('!!' + i + '!!')
  console.log('!!' + i.replace(REG, '') + '!!')
})
