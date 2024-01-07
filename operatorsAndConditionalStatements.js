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


// 5. Ternary Operators
// condition? true Output: false Output
 let aging= 14;
 aging > 18 ? console.log("Adult") : console.log("Not Adult");

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


//3.else if statement

if(age<18){
    console.log("Junior")
}
else if(age>60){
console.log("Senior")
}
else{
console.log("middle")
}

//MDN Docs

// alert("Hello");  //one time pop message
// prompt("Give me your name"); //prompt will give us msg and also we are able to take input

// let name1= prompt("What is your Name");
// console.log("User Name is",name1);

/*-------------------------------------
Q. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not
 let number1 = prompt("Enter the Number to check if number is multiple of 5 or not");
if(number1%5===0){
    console.log("Number",number1,"is Multiple of 5");
}
else{
    console.log("Number",number1,"is not a multiple of 5")
}
-----------------------------------------*/

//Q. Write a code which can give grades to students accordings to their scores.
let k;
let marks = prompt("Enter the marks");
if(marks>=80 && marks<=100){
    alert("Grade is A");
}
else if(marks>=70 && marks<=89){
    alert("Grade is B");
}
else if(marks>=60 && marks<=69){
    alert("Grade is C");
}
else if(marks>=50 && marks<=59){
    alert("Grade is D");
}
else
{
    alert("Grade is F");
}

