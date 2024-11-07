const test = require("http");
var x = 5;
var y = 10;
const num = test.createServer((request, response)=>{
    response.write(`The sum of ${x} and ${y} is ${x+y}`);
    response.end();
});

num.listen(4800);