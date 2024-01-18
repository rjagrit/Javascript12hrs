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
//'for of' loop was used to Strings and Arrays

//----for-of loop--------------
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
