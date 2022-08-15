// const a = [1,2,3,4];

// const b = [...a];

// console.log(b);



// Destructuring, Rest
// var array = ['JS','PHP','Ruby'];

// var [a,...rest] = array

// console.log(a);
// console.log(rest);

// var course = {
//     name: 'JS',
//     price: 1000,
// }

// var {name,...rest} = course;
// // console.log(rest);

// var {name, description = 'defaul description'} = course;
// console.log(description);

// function logger(a ,...params) {
//     console.log(params);
// }

// logger(1,2,3,4,5);



// Spread

// var array1  = ['JS','Ruby','PHP']
// // var array2 = ['ReactJS','Dart']
// // var array3 = [...array2,...array1];
// // console.log(array3);

// // var obj1 = {
// //     name: "JS"
// // }

// // var obj2 = {
// //     price: 1000
// // }

// // var obj3 = {...obj1, ...obj2}
// // console.log(obj3);

// function logger(a,b,c) {
//     console.log(a,b,c);
// }

// logger(...array1)


// Modules

import logger from './logger.js';

logger('Message: ','error')