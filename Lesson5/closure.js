//1

// function mult(x) {
//     x *= 3;
//     console.log(x)
// }
// mult(3);

//1.1
// var makeFunction = function(){
//     var addOne = function(){
//         var x = +prompt("Insert");
//         var fact = 1;
//         if (!isNaN(x)){
//             for(var i = 2; i <= x ; i++){
//                 fact = fact * i;
//             }
//         } else {alert("Not a number!");}
//         return fact;
//     };
//     return addOne;
// };
//
// var f = makeFunction();
//
// var y = f();
// console.log(y);


//2

// var add = function (x) {
//     return function sum (y){
//         return x + y;
//     }
// };
//
// console.log(add(2)(3)); // 5


//3

//?????

// var numberArray = [1, 2, 3, 4, 10, 5, 6, 7];
//
// var numberAlert = numberArray.map( function (t) {
//         alert(t);
//     // return function () {
//     //     alert(t);
//     // }
// });
// console.log(numberAlert);


//4

// function double(x){
//     return x *=2;
// }
//
// function doubleTripple(x){
//     return double(x)*3;
// }
//
// console.log(double(9)); // 18
// console.log(double(3)); // 6
//
// console.log(doubleTripple(3)); // 18 = 3 * 3 * 2
// console.log(doubleTripple(2)); // 12 = 2 * 3 * 2
// console.log(doubleTripple(5)); // 30 = 5 * 3 * 2

//5

// function createCount () {
//     var currentCount = 0;
//     return function(){
//         return currentCount += 1;
//     };
// }
//
// var makeCount = createCount();
// console.log(makeCount()); // 1
// console.log(makeCount()); // 2
// console.log(makeCount()); // 3
// console.log(makeCount()); // 4
// console.log(makeCount()); // 5
// console.log(makeCount()); // 6

//6

// function createCount (startFrom) {
//     var currentCount = startFrom;
//     return function(){
//         return currentCount += 1;
//     };
// }
//
// var makeCount = createCount(4);
//
// console.log(makeCount()); // 5
// console.log(makeCount()); // 6
// console.log(makeCount()); // 7
// console.log(makeCount()); // 8
// console.log(makeCount()); // 9
// console.log(makeCount()); // 10