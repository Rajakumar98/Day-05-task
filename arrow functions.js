// Print odd numbers in an array
//arrow function
let odd=() =>{
    let number=[1,2,3,4,5,6,7,8,9,10];
        for(let i=0;i<number.length;i++){
             if(number[i]%2!=0){
                console.log(number[i]);
            } 
        }
    };
    odd();
       


//Convert all the strings to title caps in a string array

let tittlecaps=()=>{
    let str=("i am a player".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
 }; 
 tittlecaps();

//Sum of all numbers in an array

let sum = [1,2,3,4,5,6,7,8,9,10].reduce(add); 

function add(accumulator, a){
  return accumulator + a;
}
console.log(sum); 

// console.log(
//     [10,20,30].reduce(function(acc, val) { return acc + val; })
//   )

//Return all the prime numbers in an array
let prime=()=>{
    let numArray = [1,2,3,4,5,6];
       
       numArray = numArray.filter((number) => {
         for (let i = 2; i <= Math.sqrt(number); i++) {
           if (number % i == 0) return false;
         }
         return true;
       });
       console.log(numArray);
   };
   prime();


//Return all the palindromes in an array
let ask=() =>{
let Array = ['121', 'dog', 'city', 'malayalam'];   
   let b = Array.filter(function(c,d,f){
   let Cur = c.split('').reverse().join('');
   if(c == Cur){
   console.log( Array[d] );
   }
   });
   
 };ask();