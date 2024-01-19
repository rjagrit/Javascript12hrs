//-----------Wrong Method--------------
// for(int i=0; i<=3;i++)
// {
//     console.log("Hi, My name is Jagrit");
// }
//-------------------------------------
//Loop variable meaning is limited to loop only. 
// for(let i=0; i<=1;i++)
// {
//     console.log("Hi, My name is Jagrit");
// }

//Q. Calculate sum of first n natural numbers

// let sum=0;
// for(let i=0;i<6;i++){
//     sum= sum+i;
// }
// console.log(sum);
// console.log("Loop has ended");

//while loop
// let i=1 
// while(i<=5){
//     console.log("i=")
// }

// //do while loop (has condition that it will surely run a one time)
// let m=10
// do{
//     console.log('Hi')
// }while(m>1)

let i=1;
do{
    console.log("i=",i);
    i++;
}while(i<=10);

//'for of' loop and 'for in' loop, these loops are used to iterate on some special data types 

//----for-of loop--------------
// 'for of' loop was used to Strings and Arrays but not used for the objects 
/*
for(let val of strVar){
    //do the work
}
*/
// in this loop we don't need to put increment statement 
let str= "Apna College" //if we leave the space then it will also be counted
for(let j of str){
    console.log("j=",j);
}

/*
Output of above code will be 
j= A
 j= p
 j= n
 j= a
 j=  
 j= C
 j= o
2 times j= l
 j= e
 j= g
 j= e
*/

//Q. Calculating the size of the string
let str1="JavaScript"; // space will be counted
let size=0;

for(let k of str1){
    size++;
}
console.log("String Size will be",size)

//---for in was used in case of objects (use of keys here)

/*
for(let key in objVar){
    //do some work
}
*/
//making of object(here name, age, cgpa and isPass is the key)
let student={
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

//returns the key
for(let m in student){
    console.log("Key=",m,"and Value=",student[m]);
}

// so with the help of for in loop we will access the key value pair?

//Q. Print all even numbers between 0 to 100
for(let p=0; p<=100;p++)
{
    if(p%2==0)
    {
        console.log(p);
    }
}

/* Q. Create a game where you start with any random game number.
    Ask the user to keep guessing the game number until the user enters correct value*/

//--------Number guessing game---------
let gameNum= 25;
let userNum= prompt("Guess the game number");


while(userNum != gameNum){
    userNum= prompt("You entered a wrong number, Guess again");
}
console.log("Congratulations you entered the right number");
