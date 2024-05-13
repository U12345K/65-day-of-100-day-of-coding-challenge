// task 1
// type-annotations-with function 
/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
 **********************************/

// Function to calculate the area of a rectangle
function calculateRectangleArea(lengthRectAngle: number, widthOfRectAngle: number): number {
    return lengthRectAngle * widthOfRectAngle;
  }
  
  // Calling the function with valid arguments
  const lengthRectAngle = 5;
  const widthOfRectAngle = 3;
  const area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);
  console.log(`The area of the rectangle is: ${area}`);

//   task 2
// optional-and-defalt-parameter
/**********************************
 * OPTIONAL AND DEFAULT PARAMETER *
 **********************************/

// Optional Parameters:
function greetOptional(name: string, age?: number) {
    if (age !== undefined) {
      console.log(`Hello, ${name}! You are ${age} years old.`);
    } else {
      console.log(`Hello, ${name}!`);
    }
  }
  
  greetOptional("Alice"); // Output: "Hello, Alice!"
  greetOptional("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
  
  // Default Parameters:
  function greetDefault(name: string, age: number = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }

  
  greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
  greetDefault("Bob", 30); // Output: "Hello, Bob! You are 30 years old."

//   task 3
// Function-Rest-Parameter
/***************************
 * FUNCTION REST PARAMETER *
 ***************************/

// Function with a rest parameter and type annotations
function addAll(...nums: number[]): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      result += nums[i];
    }
    return result;
  }
  
  // Calling the function with various numeric arguments
  console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 170.5

// task 4
// arrow function 
/******************
 * ARROW FUNCTION *
 ******************/

const addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(10, 20)); // Output: 30

// task 5
// anonymous-function 
/**********************
 * ANONYMOUS FUNCTION *
 **********************/

const add = function (num1: number, num2: number): number {
    return num1 + num2;
  };
  console.log(add(10, 20)); // Output: 30

// task 6
// void-&-never 
/****************
 * VOID & NEVER *
 ****************/

// void
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }
  
  function noReturnValue(): void {
    // This function doesn't return a value (implicitly returns undefined).
  }
  
  // never
  function throwError(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {
      // This function never exits (infinite loop).
    }
  }
