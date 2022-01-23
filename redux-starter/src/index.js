import { compose, pipe } from "lodash/fp";

//trim

let input = "    Javascript";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
// const wrapInSpan = (str) => `<span>${str}</span>`;

// const wrap = (type, str) => `<${type}>${str}</${type}>`;
//const transform = pipe(trim, toLowerCase, wrapInDiv("div"));

const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const toLowerCase = (str) => str.toLowerCase();

let result = wrapInDiv(toLowerCase(trim(input)));

// const transform = compose(wrapInDiv,toLowerCase,trim)
// const transform = pipe(trim, toLowerCase, wrapInDiv);

const transform = pipe(trim, toLowerCase, wrap("div"));

result = transform(input);

console.log(result);
alert("hi");

// const sayHello = ()=>{
//     return ()=>{
//         return "hello world"
//     }
// }

// let fn = sayHello()

// let message = fn()

// let numbers = [1,2,3]

// numbers.map(number => number * 2 )
