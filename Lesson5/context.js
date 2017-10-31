// function isContextEqualTo(contextLink) {
//     console.log(contextLink === this);
// }
//
// function name() {
//     isContextEqualTo(window); // true
// }
//
// var name = "Vasya";
//
// var user = {
//     getName: function () {
//         isContextEqualTo(window); // true
//         isContextEqualTo(user); // false
//     }
// }
//
// console.log(user.getName()); // true,false
//
// var getName = user.getName;
//
// console.log(getName()); // true
//
// user.getName = name;
//
// console.log(user.getName()); // Error
//
// user.getName.call(window); // Error