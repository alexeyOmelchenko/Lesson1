//1

// myname = "global";
// function func() {
//     console.log(myname); //undefined
//     var myname = "local";
//     console.log(myname); //local
// }
// func();

//2

// var a = 90100;
// function someFunc(){
//     if(false){
//         var a = 1;
//     } else {
//         var b = 2;
//     }
//     console.log(b); //2
//     console.log(a); //undefined
// }
// someFunc();

//3

// function test() {
//     this; // window
// }
// test();

//4

// Что такое глобальные переменные ?
// Как они создаются ?
// Какие проблемы связаны с использованием глобальных переменных?

// Это переменные созданые вне функций, а в window
// Вне функций (в window)
// Могут быть перезаписаны в функциях

//5

// a(); //ok
// b(); //error потому что мы вызываем ее до обьявления,
// а при такой записи можно ее вызывать только после обьявления
//
// var b = function(){
//     alert( 'function b');
// };
//
// function a(){
//     alert( 'function a' ); //Все ок
// }

//6

// var i = 0;
//
// for (; i< 10; i ++) { // 0,1,2,3,4,5,6,7,8,9
//     console.log(i)
// }

//7

//число всегда четное :)
// function fact(x){
//     var sum = 1;
//     for(var i = 2; i<=x; i++){
//         sum = sum * i;
//     }
//     if (sum%2 === 0){
//         sum *= 2;
//         console.log(sum);
//     } else {
//     console.log(sum);}
// }
//
// fact(5);

//8

// function rand() {
//     var hm = +prompt("How many symbols you want to see?");
//     var str = "";
//     var words = '0123456789qwertyuiopasdfghjklzxcvbnm_^&*QWERTYUIOPASDFGHJKLZXCVBNM';
//
//     for (var i =0; i<hm; i++){
//         str +=  words.charAt(Math.floor(Math.random() * words.length));
//     }
//     return str;
// }
//
// console.log(rand());

//9

// function union(x, y, z) {
//     var un = x.concat(y, z);
//     console.log(un);
//     for(var i=0; i<un.length; i++){
//         for (var j = un.length; j>i; j--){
//             if(un[i]===un[j]){
//                 un.splice(j,1);
//             }
//         }
//     }
//     console.log(un);
// }
// union([1, 2, 3], [101, 2, 1, 10], [2, 1]);

//10

// function flatten(arr){
//
//     arr = arr.join(",").split(",");
//     console.log(arr);
//     var z =[];
//     for(var i=0; i<arr.length; i++){
//         z.push(+arr.join("")[i]);
//     }
//
//     console.log(z);
//
// }
// flatten([1, [2], [3, [[[4]]]]]);

//11

// function delDouble(x){
//     console.log(x);
//     for (var i = 0; i < x.length; i++){
//         for(var j = x.length; j>i; j--){
//             if(x[i] === x[j]){
//                 x.splice(j,1);
//             }
//         }
//     }
//     console.log(x);
// }
//
// delDouble([1,2,3,4,5,1,1,1,3,4,5,6,7,8,9]);