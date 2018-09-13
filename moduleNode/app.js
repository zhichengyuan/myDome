var m1 = require('./modules/m1');
var m2 = require('./modules/m2');
var m3 = require('./modules/m3');
var u = require('uniq');

m1.foo();
m2();
m3.foo();
console.log(u(m3.arr));
// console.log(u(''));
// m1 = {
//     msg: 'module1',
//     foo:function () {
//         console.log(this.msg);
//     }
// }

// m2 = function () {
//     console.log(module2);
// }

// m3 = {
//     foo:function () {
//         console.log('module4');
//     }
// }