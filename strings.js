/*
---------Strings-------------
1) String had some inbuilt properties like 'Length'--> Internal variable.
[Properties was just like the key value pairs that store the information about an object
same as String had some internal variables that store some value of the string]

2) Escape Characters are also counted as well when we apply the function

3) Strings are Immutable 
*/

//Valid Strings

// a) Create String
let str= "Apna College";
let str2= 'Daisy';

console.log(str);

// b)Length of string
console.log("String size is:",str.length);

// c) String Indicies
for(let i=0;i<str.length;i++){
    console.log("Index",i,":",str[i]);
}

// 2nd methods to create the string was Template Literal(special string) (``--> backticks)
let sentence= `This is a template literal`; // we can write any text in this backticks

// Q. Now if we have double quotes and single quote for creation of string then why we need this bakcktick
let obj={
    item: "pen",
    price: 10,
};

console.log("the cost of",obj.item,"is",obj.price);// So, to avoid making small small strings we use backtrick here
console.log(`The cost of ${obj.item} is ${obj.price}`);


//---------String Methods--------------
//Methods are built-in functions to manipulate a string 
// Like log() method was used for printing purpose

//a) toUpperCase()
let str3= "j.c bose university ymca faridabad";
let newStr = console.log(str3.toUpperCase());

//b)toLowerCase()
let string= "I LOVE MY InDia"
console.log(string.toLowerCase())

//c) trim()--> Will remove the spaces at the begining and at the end of the String
let n= "        Onion and  Potatos are very very costly             ";
console.log(n.trim());

//d)slice()-->returns the part of the string
let p= 'abcdefgh';
console.log(p.slice(1,3)); //last mentioned index was non-inclusive

// e) concat()
let str1= "apna";
let string2= "college";
console.log(str1.concat(string2));
console.log("I am learning coding from"+ str1 + string2);
console.log("I am learning coding from", str1 ,string2);

// f)replace()
let r= "hello";
console.log(r.replace("h","y"));// replace was used to replace the vakue only once

let y= "jajajajagrit";
console.log(y.replaceAll("ja","hp"));// replace all in one turn

// g) charAt()-->finding index at particular index

let j= "Hello World";
for(let h=0;h<j.length;h++){
    console.log("Character at",h,"is",j.charAt(h));
}

// Q. Prompt the user to enter their full name. Generate a username for them 
//    based on the input. Start username with @, followed by their full name and ending with the fullname length

let Name= prompt("Enter you name");
console.log("Your User-Name for the webiste will be @"+Name+Name.length);