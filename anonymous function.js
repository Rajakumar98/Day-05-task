// // Print odd numbers in an array
// //anonymous

var odd=
function(a){
  var  res="";
  for(i=0;i<a.length-1;i++){
      if(a[i]%2!==0){
          res+=a[i]+" ";
      }
  }
  res+=a[a.length-1];
  return res;
}
console.log(odd([1,2,3,4,5]))

// //IIFE
// (function(a){
//   var  res="";
//   for(i=0;i<a.length;i++){
//       var count=0;
//       for(j=1;j<=a[i];j++){
//           if(a[i]%j===0) {
//               count++
//           }
//       }
//       if(count==2){
//           res+=a[i]+" "
//       }
//   }
//   console.log(res);

// })([1,2,3,4,5]);

//  //Convert all the strings to title caps in a string array
// // anonymous
 var str=
 function (string) {
  var sent = string.toLowerCase().split(" ");
  for(var i = 0; i< sent.length; i++){
     sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
  }
sent.join(" ");
var res="";
for(let i=0;i<sent.length-1;i++){
   res+=sent[i]+" "
}
res+=sent[sent.length-1]
return res;
}
console.log(str("my name raja"));

// IIFE
// (function (string) {
//   var sent = string.toLowerCase().split(" ");
//   for(var i = 0; i< sent.length; i++){
//      sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
//   }
// sent.join(" ");
// var res="";
// for(let i=0;i<sent.length-1;i++)
// {
//    res+=sent[i]+" "
// }
// res+=sent[sent.length-1]
// console.log(res);
// }) ("we are guvian");

// //Sum of all numbers in an array
var sum =
function(a){
  var  res=0;
  for(i=0;i<a.length;i++){
          res+=a[i]
  }
  return res;

}
console.log(sum([1,2,3,4]))

// IIFE
// var sum =
  // (function(a){
  //   var  res=0;
  //   for(i=0;i<a.length;i++){
  //           res+=a[i]
  //   }
  //   console.log(res);
  
  // })([1,2,3,4])

// //Return all the prime numbers in an array
// //anonymous
var prime=
function(a){
  var  res="";
  for(i=0;i<a.length;i++){
      var count=0;
      for(j=1;j<=a[i];j++){
          if(a[i]%j===0)
          {
              count++
          }
      }
      if(count==2){
          res+=a[i]+" "
      }
  }
  console.log(res);

}([1,2,3,4,5,6,7,8,9,11]);

// IIFE
// (function(a){
//   var  res="";
//   for(i=0;i<a.length;i++){
//       var count=0;
//       for(j=1;j<=a[i];j++){
//           if(a[i]%j===0)
//           {
//               count++
//           }
//       }
//       if(count==2){
//           res+=a[i]+" "
//       }
//   }
//   console.log(res);

// })([1,2,3,4,5,6,7,8,9,11]);

// //Return all the palindromes in an array
var palind=
function(a){
  var res="";
  var ans="";
  for(i=0;i<a.length;i++){
      res+=a[i];
      var count=0
      
      for(j=0;j<res.length;j++){
          if(res[j]===res[((res.length-1)-j)]){
              count++
              }
      }
      if(count===res.length){
          ans+=res+" "
      }
      res="";
  }
  return ans;

}
console.log(palind([1,11,343,200,798,80108,8008,999,7171,700007]))

//IIFE
// (function(a){
//   var res="";
//   var ans="";
//   for(i=0;i<a.length;i++){
//       res+=a[i];
//       var count=0
      
//       for(j=0;j<res.length;j++){
//           if(res[j]===res[((res.length-1)-j)]){
//               count++
//               }
//       }
//       if(count===res.length){
//           ans+=res+" "
//       }
//       res="";
//   }
//   console.log(ans);

// }) ([1,11,343,411,575,600,7887,80108,999,11]);

// //Return median of two sorted arrays of the same size.
var arr=
function(a,b){
  var c=[];
  var n=a.length;
  var p=b.length;
  var i=0;
  var j=0;
  var med=0;
  while(i<n && j<p){
      if(a[i]<b[j]){
          c.push(a[i])
          i++
      }
      else{
          c.push(b[j])
          j++
      }
  }
  if(i<n){
       for(let k=i;k<n;k++){
           c.push(a[k])
       }
   }
   else if(j<p){
       for(let m=j;m<p;m++){
           c.push(b[m])
       }
   }
   if(c.length%2===0){
       med=(c[(c.length/2)-1]+c[c.length/2])/2
   }
   else{
       med=c[Math.floor(c.length/2)]
   }
   return med;
  
}
console.log(arr([12,14,16,18,20],[11,13,15,17,19]));

// IIFE
// (function(a,b){
//     var c=[];
//     var n=a.length;
//     var p=b.length;
//     var i=0;
//     var j=0;
//     var med=0;
//     while(i<n && j<p){
//         if(a[i]<b[j]){
//             c.push(a[i])
//             i++
//         }
//         else{
//             c.push(b[j])
//             j++
//         }
//     }
//     if(i<n){
//          for(let k=i;k<n;k++){
//              c.push(a[k])
//          }
//      }
//      else if(j<p){
//          for(let m=j;m<p;m++){
//              c.push(b[m])
//          }
//      }
//      if(c.length%2===0){
//          med=(c[(c.length/2)-1]+c[c.length/2])/2
//      }
//      else{
//          med=c[Math.floor(c.length/2)]
//      }
//    console.log(med);
    
//   })
//  ([12,14,16,18,20],[11,13,15,17,19]);
  

// //Remove duplicates from an array
var arr=
function(a){
  var b=[];
  var n=a.length;
  for(let i=0;i<n-1;i++){
      for(let j=i+1;j<n;j++){
          if(a[i]===a[j]){
              delete a[j]
          }
      }
  }
  for(let i=0;i<a.length;i++){
      if(a[i]%10===Math.floor(a[i]%10)){
          b.push(a[i])
      }
  }
  let c=""
  for(let i=0;i<b.length-1;i++){
       c+=b[i]+" ";
  }
  c+=b[b.length-1];
   return c;
  
}
console.log(arr([21,20,15,10,15,21,20,10]));

// IIFE
// (function(a){
//     var b=[];
//     var n=a.length;
//     for(let i=0;i<n-1;i++){
//         for(let j=i+1;j<n;j++){
//             if(a[i]===a[j]){
//                 delete a[j]
//             }
//         }
//     }
//     for(let i=0;i<a.length;i++){
//         if(a[i]%10===Math.floor(a[i]%10)){
//             b.push(a[i])
//         }
//     }
//     let c=""
//     for(let i=0;i<b.length-1;i++){
//          c+=b[i]+" ";
//     }
//     c+=b[b.length-1];
//    console.log(c);
    
//   })
// ([21,20,15,10,15,21,20,10]);

// //Rotate an array by k times
var rotate=
(function(a,k){
  n=a.length;
    c=[];
     d="";
for(i=0;i<n;i++){
    c[(i+k)%(n)]=a[i]
}
for(i=0;i<c.length-1;i++){
    d+=c[i]+" "
}
d+=c[c.length-1]
return d;
})
console.log(rotate([1,2,3,4,5],4));

//IIFE
// (function(a,k){
//     n=a.length;
//       c=[];
//        d="";
//   for(i=0;i<n;i++){
//       c[(i+k)%(n)]=a[i]
//   }
//   for(i=0;i<c.length-1;i++){
//       d+=c[i]+" "
//   }
//   d+=c[c.length-1]
//  console.log(d);
//   })
//  ([1,2,3,4,5],4);




// arrow function



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