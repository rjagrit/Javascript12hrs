/*
1. Javascript is a Dynamic Programming Lang. means we need not define 
the types of data that we are stoing in the variable. 

2. writing variables cases 
fullName -> CamelCase
fullname -> not right
full-name -> kebab case
FullName -> Pascal Case

3. We have to use keyword with variable like 
-let, var, const 
-let and const are the more favourable keywords used in Javascript
-cant use var becaise it is already used before 2015 as we got new standard
 and rules that is ES6 (Ecma Script 6) 

 4. a) var - variable van be re-declared and updated. A global scope variable
    b) let - Variable cannot be re-declared but can be updated. A Block scope variable
    c) const - Varibale cannot be re-declared or updated. A block scope variable

 5. By default any variable declared and we cannot assign any value to it then it should be undefined
 
*/
// for printing something on screen we use console. 
console.log("First JS Programin");
console.log("First JS Programing Language");

// for stroing data we need a container called as variables
fullname= "Jai Stark"
age = 25;
price= 99.99;
a= null;
y= undefined;
console.log(fullname);

// assignemnt operator let say value 201 stored in y varibale
y= 201;
console.log(y);

//---------Variables rules-----------
// Variable name are case sensitive; both have different meaning 
ambinum= 21;
Ambinum= 25;

// only letters, digits, underscore and $ is allowed but space not allowed
aaaa= 12; // v
//12dghj= 23;// inv cuz not start wih immediate digit



// only a letter, underscore(_) or $ should be 1st character.
aaaa;
_sss;
$av=n; 

//reserved wods cannot be variable name
console=23;
console.log(console);// wrong

// ----------------------------------------

//declaring variables using let keyword
let fullName = "Jai";
console.log(fullName);

 