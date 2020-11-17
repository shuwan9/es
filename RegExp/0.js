// const REG = new RegExp(/\{\{(.*)\}\}/)
const REG = new RegExp('{{(.*)}}')

;['{{', '}}', '{{}}', '{{msg}}'].forEach((i) => console.log(REG.test(i)))
