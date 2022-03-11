


const add = (a) =>{
    return (b)=>{
        return a+b
    }
}

//add(1)(2);

// we can rewrite with arrow function
const add2 = a => b => a+b // (a,b) => a+b
