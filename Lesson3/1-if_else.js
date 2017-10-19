//1

// function sort(a){
//     if (a == 0) {
//         console.log("True!");
//     } else {
//         console.log("False");
//     }
// };
// sort(1);
// sort(0);
// sort(-3);

// var a = +prompt("Insert number please");
// if (a == 1){
//     console.log("False");
// } else if (a == 0){
//     console.log("True");
// }   else if (a == -3){
//      console.log ("False");
// }       else {
//          console.log("ERROR");
// }

//2

// function sort(a) {
//     if (a == "test"){
//         console.log("True");
//     } else
//     {console.log("False")}
// }
// sort("test");
// sort("тест");
// sort(3);

// var a = prompt("Insert text please");
// if (a == "text"){
//     console.log("Verno");}
//         else if (a == "тест"){
//          console.log("Ne Verno")
//         } else if(a == 3){
//             console.log("Ne Verno");
//             } else {
//                 console.log("Error");
// }

//3.1

// var test = prompt("Insert true or false");
// if (test == true){
//     console.log("Verno!");
// } else {
//     console.log("Ne verno!");
// }

//3.2

// var test = true;
// test ? console.log("Verno") : console.log("Ne verno");

//4

// var a = +prompt("Insert a");
// var b = +prompt("Insert b");
// var result = a + b;
// if (result > 5) {
//     result = 5;
//     } else {
//     result = result * 10;
// };
// console.log(result);

//5

// var a = +prompt("Insert a");
// if (a == 0 || a == 2){
//     a = a / 10;
// } else {
//     a = a + 7;
// }
// console.log(a);

//6

// var a = +prompt("Insert a");
// var b = +prompt("Insert b");
// if (a <= 1  && b >=3 ){
//     console.log("Verno");
// } else {
//     console.log("Neverno");
// };

//7

// var a = +prompt("Insert a");
// var b = +prompt("Inset b");
// if ((a > 2 && a < 11) || ( b >= 6 && b < 14) ){
//     a = a + 2;
//     } else {
//     a = a + 5;
// }
// console.log(a);

//8

// var num = +prompt("Insert number of the season");
// switch(num) {
//     case 1:
//         console.log("Winter");
//         break;
//     case 2:
//         console.log("Spring");
//         break;
//     case 3:
//         console.log("Summer");
//         break;
//     case 4:
//         console.log("Autumn");
//         break;
//     default:
//         console.log("Error");
// }

//9.1

// var lang = prompt("Insert your language");
// var arr = [];
// if (lang == "ru"){
//     console.log(arr = ["Pon", "Vt", "Sr", "Cht", "Pyat", "Sub", "Vskr"]);
// }       else if(lang == "de"){
//          console.log(arr = ["Mo", "Di", "Mi", "Do", "Fr" , "Sa", "So"]);
// }           else if (lang == "en"){
//                 console.log(arr = ["Mo", "Tu", 'We', "Th", "Fr", "Sa", "Su"]);
// } else {
//     console.log("Error");
// };

//9.2

// var lang = prompt("Insert your language");
// var arr = [["Pon", "Vt", "Sr", "Cht", "Pyat", "Sub", "Vskr"],
//             ["Mo", "Tu", 'We', "Th", "Fr", "Sa", "Su"],
//              ["Mo", "Di", "Mi", "Do", "Fr" , "Sa", "So"]];
// switch (lang){
//     case "ru":
//         console.log(arr[0]);
//         break;
//     case "en":
//         console.log(arr[1]);
//         break;
//     case "de":
//         console.log(arr[2]);
//     default:
//         console.log("Error");
// }