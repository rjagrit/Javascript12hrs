//Comments - Part of the code which is not executed
//single comment 
/* Multiline comment */

// -----------Operators-----------------------------------------
// Used to perform some operation on data
// 1. Arithmetic Operators (Modulus, Exponential, Increment, Decrement)

let a= 5, b=2;
// =======Works on 2 operands============
console.log("a =",a,"b =",b);
console.log("a+b =",a + b);
console.log("a-b =",a - b);
console.log("a/b =",a / b);
console.log("a*b =",a * b);

console.log("a%b =",a % b);
console.log("a**b =",a ** b);

// =======Works on 2 operands============

// =======Works on single operand============
//unary operators
console.log("Old value of a = ",a);
a++ //post increment (changes value after use)
console.log("New value of a = ",a);

console.log("Old value of b = ",b);
--b //pre decrement (changes value before use)
console.log("New value of b = ",b);
// ==========================================

//2. Assignment Operators
let c= 8;
c+=1; //all arithemetic operators are allowed in assignment operators
console.log(c);

//3. Comparison Operators

let g= 5, f=2;
let y= "5";
console.log("a==b",a==b); // equal to
console.log("a!=b",a!=b); // not equal to

console.log("g==y",g==y); // it is true because ek string me jab ek number hota h toh javascript implicitly automatically convert number to string 

console.log("g>=f",g>=f); // greater than or equal to
console.log("g<=f",g<=f); // less than or equal to

console.log("g===y",g===y); // strict version, asnswer is false here
//4. Logial Operators (Give answer after evaluationg multiple expressions)

let condition1= a>b;
let condition2= a<b;

console.log("condition1 && condition2", condition1 && condition2); //logical AND

console.log("condition1 || condition2", condition1 || condition2); //logical OR

console.log("condition1 != condition2", condition1!=condition2); //logical NOT

// ----------------------------------------------------------------------------------

//---------------Conditional Statements----------------------

// 1. if statement
let age = 25;

if(age>18){
    console.log("You can vote");
}

//2. if else statement
let mode="dark mode";
if(mode=="dark mode"){
    console.log("Correct color");
}
else{
    console.log("incorect color");
}

//Q. Checking the number is even or odd in JS

let num= 5;

if(num%2===0){
    console.log("Number",num,"is Even");
}
else{
    console.log("Number",num,"is Odd")
}