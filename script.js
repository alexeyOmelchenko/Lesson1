
//1
var str = "Have a good day";
console.log(str);

// 2
var age = 30;
console.log(age);
age = undefined;

// 3
var info = {
    name : "Alexey",
    age : 30
};
console.log(info.name);
console.log(info.age);
var name = info.name;
console.log(name);
delete info.name;
console.log(name);

// 4
var customArray = [1,2,3];
console.log(customArray);
customArray = [0,0,0]; // тут просто нужно было перезаписать знаение всего массива на 0 то есть 
// customArray = 0;
console.log(customArray);

//5
var student = "Alexey";
console.log(student);
student = "Omelchenko";
//??
// не знаю что ожидалось в результате у тебя о в строке должна быть твое имя и фамилия а когда ты просто записал в нее свою 
// фамиилию имя затерлось в этом случае можно было использовать оператор +=: student += ' Omelchenko'; 

// 6
var complex = [];
complex[0] = "My name is";
complex[1] = 7;
complex[2] = null;
complex[3] = info;
console.log(complex[2]);

// 7
var complexObj = {
};
complexObj.name = "Alexey";
complexObj.age = 30;
complexObj.friends = ["First", "Second", "Third"];
complexObj['soc_links'] = {
    facebook : "Link",
    googlePlus : "Link1"
};
var shab = `My name is ${complexObj.name}`;
var shab1 = `I am ${complexObj.age} old`;
var shab2 = `I have a lot of friedns, but the best one is ${complexObj.friends[0]}`;
var shab3 = `You can find me on facebook: ${complexObj.soc_links.facebook} or on google groups : ${complexObj.soc_links.googlePlus}`;
console.log(shab);
console.log(shab1);
console.log(shab2);
console.log(shab3);
