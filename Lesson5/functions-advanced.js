//1

// function color()
// {
//     var r = Math.round(255*Math.random());
//     var g = Math.round(255*Math.random());
//     var b = Math.round(255*Math.random());
//     var z = r+g+b;
//     return document.body.style.backgroundColor = z;
//
// }
// console.log(color());

//2
// function getProducts(number) {
//     var arr = [];
//     for(var i = 1; i <= number; i++){
//         arr.push("Products " + i);
//     }
//     console.log(arr)
// }
// getProducts(10);


//3
// Write function that will get the 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// function pow(x,y) {
//     var z = Math.pow(x,y);
//     console.log(z);
// }
// var a = pow(3,8);
// a.split(",");
// console.log(a);

// function pow(x) {
//     var y = 1;
//     for(var i = 1; i<=x; i++){
//         y *= 2;
//     }
//     console.log(y);
//     var z = y + "";
//     var arr = z.split("");
//
//     var sum = 0;
//     for(var j = 0; j < arr.length; j++){
//         if (arr[j] === "e"){
//             break;
//         } else if (arr[j] === "."){
//         } else {
//             sum = sum + +arr[j];
//         }
//     }
//     console.log(sum);
// }
//
// pow(15);
// pow(100);