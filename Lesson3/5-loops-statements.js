//1

// for (var i = 0; i <= 15; i++){
//     if(i%2 !== 0){
//         console.log(i + " is odd");
//     } else {
//         console.log(i + " is even")
//     }
// }

// or you can uoe ternar operator: console.log(i + (i % 2 === 0 ? " is even!" : " is odd!"));

//2

// for(var i = 1; i <= 100; i++){
//
    // you can save i % 3 and i % 5 in variables and then use it to not check it twice
//     if (i%3 === 0 && i%5 === 0){console.log("FizzBuzz")}
//     else if (i%5 === 0){ console.log("Buzz")}
//     else if (i%3 === 0){ console.log("Fizz")}
//     else {console.log(i)}
// }

//3

// function GCD (x,y){
//     var x = +prompt("Enter x");
//     var y = +prompt("Enter y");
//     var arrx = [];
//     var arry = [];
//
//     for(var i = 1; i<= x; i++){
//         if(x%i == 0){
//             arrx.push(i);
//             }
//         else {}
//     }
//
//     for (var j = 1; j<=y; j++){
//         if(y%j == 0){
//             arry.push(j);
//         }
//     }
//
//     var maksElement = 0;
//     for(var k = 1; k <= arrx.length; k++){
//         for(var t = 1; t < arry.length; t++){
//             if(arrx[k] === arry[t]){
//                 maksElement = arrx[k];
//             }
//         }
//     }
//     console.log(arrx);
//     console.log(arry);
//     console.log(maksElement);
// }
// GCD();

//4

// var sum = 0;
// for(var i = 1; i <= 1000; i++){
//
//     if (i%5 === 0 && i%3 ===0){
//         sum = sum + i;}
// }
// console.log(sum);

//5

// for(var i = 10; i <= 90; i++){
//     if (i%5 === 0 && i%3 === 0){
//         console.log(i);
//     }
// }

//6

// for(var i = 70; i >= 11; i--){
//     if(i%2 !== 0){
//         console.log(i);}
// }

//7

// for(var i = 78; i>=13; i--){
//     if(i%2 === 0 && i%3 === 0){
//         console.log(i);
//     }
// }
