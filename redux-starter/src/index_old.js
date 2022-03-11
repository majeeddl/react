// import { compose, pipe } from "lodash/fp";
import { Map } from "immutable";
import { produce } from "immer";

// //trim

// let input = "    Javascript";

// const trim = (str) => str.trim();
// const wrapInDiv = (str) => `<div>${str}</div>`;
// // const wrapInSpan = (str) => `<span>${str}</span>`;

// // const wrap = (type, str) => `<${type}>${str}</${type}>`;
// //const transform = pipe(trim, toLowerCase, wrapInDiv("div"));

// const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

// const toLowerCase = (str) => str.toLowerCase();

// let result = wrapInDiv(toLowerCase(trim(input)));

// // const transform = compose(wrapInDiv,toLowerCase,trim)
// // const transform = pipe(trim, toLowerCase, wrapInDiv);

// const transform = pipe(trim, toLowerCase, wrap("div"));

// result = transform(input);

// console.log(result);
// alert("hi");

// const sayHello = ()=>{
//     return ()=>{
//         return "hello world"
//     }
// }

// let fn = sayHello()
// let message = fn()



// let numbers = [1,2,3]

//Higher order function
// map and setTimeout is and exmaple of higher order function
// numbers.map(number => number * 2 )

const person = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};
//copy object
const updated = Object.assign({}, person, { name: "Bob", age: 30 });
console.log(updated);

//This is a shallow copy
const updatedTwo = { ...person, name: "Bob" };
console.log(updatedTwo);

const copyThree = {
  ...person,
  address: {
    ...person.address,
    city: "Washington",
  },
  name: "Bob",
};
console.log(copyThree);

let book = Map({ title: "Hello" });

console.log(book);
console.log(book.get("title"));
console.log(book.toJS());

const publish = (book) => {
  return book.set("isPublished", true);
};

book = publish(book);

console.log(book.toJS());

let book2 = { title: "Harry Potter" };

const publishWithImmer = (book) => {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
};

console.log(publishWithImmer(book2));
