const fs = require('fs')

//sync 방식
console.log(1)
var data = fs.readFileSync('hello.js', {encoding:'utf8'})
console.log(data);

//async 방식
console.log(2)
fs.readFile('hello.js', {encoding:'utf8'}, (err, data)=>{
    console.log(3)
    console.log(data);
})
console.log(4)