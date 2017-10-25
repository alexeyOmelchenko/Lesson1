//1

// function getName (x, y){
//     x = prompt("Enter your name!");
//     return alert("Hello, " + x);
// }
// getName();

//2

// function double(x) {
//     x = x * 2;
//     console.log(x);
// }
// double(6);

//3

// var arr = [];
// var sum = 0;
//
// function range(x, y) {
//   // leave first statement empty if there is nothing to create
      // for(; x <= y; x++) 

    // why you add it first to array and only after that you sum it? it's not needed here

//     for(x; x <= y; x++){
//         arr.push(x);
//     }


//     for (var i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     console.log(sum);
// }
// range(1,3);

//4

// var sum = 0;
// function getPrimesSumBelow(x){
//     for (var i=2; i < x; i++){
//         for (var j=2; j <= i; j++){
//             if (i === j) {
//                 sum = sum + i;
//                 console.log("Prosote " + i);
//             }
//             else if(i % j === 0){
//                console.log("Ne prostoe " + i);
//                 break;
//             }
//         }
//     }
//     console.log("Summa prostih = " + sum);
// }
// getPrimesSumBelow(10);

//5

// var x = prompt("Enter nuber");
// function odd(x){
//     if(x%2 !== 0 ){
//         return true;
//     } else{
//         return false;
//     }

// or you can just return x%2 !== 0; from function
// }
// odd(x);

//6

// function oddNumbers(x,y){
// for(x; x<=y; x++){
// you have function odd declaired on the top you should use it and not create a new one on each for iteration
//     function odd(x){
//     if(x%2 !== 0 ){
//         console.log(x);
//     } else{
//         return false;
//     }
// }
// odd(x);
// }
// }
// oddNumbers(1,11);

//7

// function getNine(x){
//     var x = +prompt("Enter x");
//     if(x !== 9){
//         getNine(x);
//     } else if (x == 9){
//         console.log("Congrats ");
//         }
// }
// getNine();
