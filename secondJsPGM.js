/*
1. typeof is used to find the type of data we used
2. If we do not define any variable then we also get the result undefined
3. null is the object by default
4. we can change the constant object keys
*/

// Data Types in JS
// Primitive Data types-Number, String, Boolean, Undefined, Null, BigInt, Symbol

let a= 6.56;
let b= true;
let c= -190.878;// numbers can be negative or positive
let fullName= "Jai";
console.log(typeof a);
console.log(typeof(b));
console.log(typeof c);
console.log(typeof fullName);

//by defualt all data types are undefined if not initialize the value

x= null;
console.log(typeof x); 

let y= BigInt("123");
let z= Symbol("Hello ");
console.log(y);
console.log(z);

//Non-primitive Data Types are Objects(Arrays and funxtions are the subcategories of it)
//objects are the collection of values means agar bht saari vakues of store and save karvana hai toh usse object bola jata h. 
//in object key: value pair are stored inside the curly braces
// generally declare objects with use of const, also we use let
// example of declaring an object

const student= {
fullName : "Jai Watson", // key= fullName and value = Jai Watson
age : 20,
cgpa : 8.6,
isPass : true,
};

console.log(student);
// so student is now an object that is the collection of different variables

//now to access keys(in this example keys are = fullName, age, cgpa,isPass)
console.log(student["fullName"]); //1st way to access 
console.log(student.fullName); //2nd way to access 

//manipulation of the object variables
student["age"] = student.age + 1;
console.log(student.age);