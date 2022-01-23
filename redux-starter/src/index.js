
import {compose,pipe} from "lodash/fp"

//trim

let  input = '    Javascript'


const trim = str => str.trim();
// const wrapInDiv = str => `<div>${str}</div>`;
// const wrapInSpan = (str) => `<span>${str}</span>`; 

const wrap = (type)
const toLowerCase = str => str.toLowerCase()

let result = wrapInDiv(toLowerCase(trim(input)));

// const transform = compose(wrapInDiv,toLowerCase,trim)
const transform = pipe(trim, toLowerCase, wrapInDiv);

result = transform(input)







// const sayHello = ()=>{
//     return ()=>{
//         return "hello world"
//     }
// }


// let fn = sayHello()


// let message = fn()


// let numbers = [1,2,3]

// numbers.map(number => number * 2 )

