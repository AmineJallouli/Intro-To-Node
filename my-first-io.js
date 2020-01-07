const fs = require('fs')

let str = fs.readFileSync(process.argv[2],'utf8').split('\n')

console.log(str.length-1)
