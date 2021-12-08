// Lexical scope define how variable names are resolved  in nested  functions

// Closure is a term use to define when any nested child functions 
// have access to the scope of their parent function


// w3school: "A closure  is a function having access to the parent scope, 
// even  after the parent function has closed"


// global scope
let x = 1;


const parentFunction = () =>{
  
    // lexical scope
    let y = 2;
  console.log(1)
  console.log(2)
   const childFunction = () => {

         console.log(x +=5 )
         console.log(y +=1)
    }

   return childFunction;
    
}

const result = parentFunction();

// result()


// Another example to backup the w3 school statement 
// that --"even  after the parent function has closed" using IIFE

const counterFunction  = (()=>{
  let counter = 1;
  console.log(`initial value ${counter}`);

  return () => {
     counter =+ 1; console.log(counter)
  }
})()

counterFunction()
counterFunction()
