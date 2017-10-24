// //1
//
function isPal(x) {
    x = x.toUpperCase();
    var a = x.split("");

    console.log(a);
    for (var i = a.length; i >= 0; i--){
        if(a[i] === " "){
            a.splice(i, 1);
        }
        // console.log(a);
    }

    if (x === a.reverse().join("")) {
        console.log("true");
    } else {
        console.log("false");
    }
//under construction;
}

// isPal('Anna'); // true
// isPal('А роза упала на лапу Азора'); //true
// isPal('Вася'); //false
// isPal('12321'); //true
// isPal('123212'); //false