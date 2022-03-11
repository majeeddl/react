import { compose , pip, pipe} from 'lodash/fp';

/* -------------------------------------------------------------------- */
/* Function Composition */

let input = '    JavaScript ';
let output = '<div>' + input.trim() + '</div>';

//Two small and reusable function
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// Example of function composition in functional programming
// We have a couple of tiny problems :
// 1. We have to read expression from right to left
// 2. The other problem is the number of parenthesis, as we work on complex program
const result = wrapInDiv(toLowerCase(trim(input)));

/* -------------------------------------------------------------------- */
/* Composing and Piping */

//User Lodash
// I'm simply passing the reference of function
// Compose is another example of higher order function, it takes a bunch of higher order functions and returns a new function 
const transform = compose(wrapInDiv,toLowerCase,trim);
transform(input);

// To solve of reading from right to left
const transformWithPipe = pipe(trim,toLowerCase,wrapInDiv);
transformWithPipe(input);

/* -------------------------------------------------------------------- */
/* currying */
//This higher order function is very similar to "wrapInDev"
const wrapInSpan = str => `<span>${str}</span>`;

//const wrap = (type,str)=> `<${type}>${str}</${type}>`;
// We want to use currying
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const transformWithCurrying = pipe(trim,toLowerCase,wrap('span'))

/* -------------------------------------------------------------------- */
/* Pure Functions */
/*
    Javascript is not a pure function programming

    In Pure Function , we can not use :
        1. random values
        2. current date/time 
        3. read or change global state or variables ( DOM, files, db, etc )
        4. mutation of parameters


    What are the benefits of pure functions :
        1. Self-documenting
        2. Easily testable
        3. Concurrency
        4. Cacheable

*/


/* -------------------------------------------------------------------- */
/* Immutability */
//It means that when we create an object, it can not be changed or mutated

// When we use "const" keyword , you are not creating a mutated object
// In fact, "const" prevent reassignment

/*
    PROS
    Why are the benefits of "Immutability"?
        1. Your application can be more "predictable"  => Predictability
        2. Faster Change Detection
        3. The third benefit of immutability is "Concurrency"

    CONS
        1. Performance
        2. Memory overhead ( copying of object)

*/