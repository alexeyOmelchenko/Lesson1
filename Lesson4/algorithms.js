//1

// function getPrimeNumbers(x,y) {
//
//     for (x; x <= y; x++) {
//         for (var j=2; j <= x; j++){
//             if(x > j && x % j ===0){
//                 break;
//             } else if(x===j){
//                 console.log(x);
//             }
//         }
//     }
// }
// getPrimeNumbers(2,10);

//2

// var obj = {
//     className: 'open menu'
// };
//
// function addClass(obj, cls){
//     var arr = obj.className.split(" ");
//     for(var i = 0; i < arr.length; i ++){
//         if(arr[i] === cls){
//             break;
//         } else if(i === arr.length - 1) {
//             arr.push(cls);
//         }
//     }
//     obj.className = arr.join(' ');
//     console.log(obj.className);
// };
// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'
//
// console.log(addClass);

//3

// var obj = {
//     className: 'open open menu'
// };
//
// function removeClass(obj, cls){
//     var arr = obj.className.split(" ");
//     for (var i = arr.length; i >= 0; i--){
//         if(arr[i] === cls){
//             arr.splice(i,1);
//             // i = i-1;
//         }
//     }
//     console.log(arr.join(" "));
// }
//
// removeClass(obj, 'open'); // obj.className='menu'
// removeClass(obj, 'blabla'); // без изменений (нет такого класса)

//4

// var sum = 0;
//
// function fillArray(a){
//     var a = +prompt("Insert value!");
//     if ((!isNaN(a)) && (a !== null)){
//         sum += a;
//         fillArray();
//     }
//     return sum;
// }
// console.log(fillArray());

//5

// function fib(x){
//     var arr = [1, 1];
//
//     for(var i = 2;  i < x; i++){
//         arr.push(arr[i - 1] + arr[i-2])
//     }
//     console.log(arr[x-1]);
// }
//
// fib(3); //2
// fib(7); //13
// fib(77); //5527939700884757

//6

// var str = prompt("Insert string");
// var partTwo = "...";
// if(str.length > 20){
//     var partOne = str.slice(0,20);
//     var result = partOne + partTwo;
//     console.log(result);
// } else{
//     console.log(str);
// }

//7

// var tasksCompleted = {
//     'Anna': 29,
//     'Serg': 35,
//     'Elena': 1,
//     'Anton': 99
// };
//
// var arrNames = [];
// var arrNums = [];
// var x = 0;
//
// for(var key in tasksCompleted){
//     arrNums.push(tasksCompleted[key]);
//     arrNames.push(key);
// }
// console.log(arrNames);
// console.log(arrNums);
//
// var j = 0;
// for (var i = 0; i < arrNums.length; i++){
//     if (x < arrNums[i]){
//         x = arrNums[i];
//         j = i;
//     }
// }
// console.log(arrNames[j]);
