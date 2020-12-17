var text;
text = 'Hello World';
console.log(text.length);
console.log(text.charAt(20));
console.log(text[20]);
console.log("Hello" + "world");
console.log("-------------------Lab1------------------------");
console.log("microsoft excel".toUpperCase());
console.log("GOOGLE AND APPLE".toLowerCase());
var hello = "hello world";
hello = "H" + hello.slice(1, 6) + "W" + hello.slice(7);
console.log(hello);
console.log("-------------------Lab2------------------------");
console.log(text.startsWith("Hello"));
console.log(text.startsWith("World"));
console.log(text.endsWith("Hello"));
console.log(text.endsWith("World"));
console.log("Computer".slice(3, 6));
console.log("Death Race".slice(0, 4));
console.log("Republican".slice(2, 8));
console.log("-------------------Lab3------------------------");
console.log("1,000,000 = " + 1e6);
console.log("10,000,000 = " + 1e7);
console.log("43,000,000,000 = " + 4.3e10);
console.log("0.000012 = " + 1.2e-5);
console.log("0.0000001234 = " + 1.234e-7);
console.log("1e10 = " + 1 * (Math.pow(10, 10)));
console.log("2e5 = " + 2 * (Math.pow(10, 5)));
console.log("122e8 = " + 122 * (Math.pow(10, 8)));
console.log("1e-8 = " + 1 * (Math.pow(10, -8)));
console.log("12e-5 = " + (1.2 * (Math.pow(10, -4))).toFixed(5));
console.log("-------------------Lab4&Lab5------------------------");
var num = [100, 111, 55, 21, 99];
num.map(function (item) { return console.log(item + " to octa =  " + item.toString(8)); });
num.map(function (items) { return console.log(items + " to hexa =  " + items.toString(16)); });
console.log("round 12.423 = " + Math.round(12.423));
console.log("round 31313.135 = " + Math.round(31313.135));
console.log("round 42.809 = " + Math.round(42.809));
console.log("-------------------In-class 9/12/2020------------------------");
var numberr = 1.23456;
console.log(Math.floor(numberr * 100) / 100); //1.23
console.log(Math.floor((numberr * 100) / 100)); //1
function randomMinMax(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(randomMinMax(-20, 39));
var A, C = false;
var B = true;
console.log("A||(B&&C) =", A || (B && C));
console.log("A||(B||C) =", A || (B || C));
console.log("B&&(A||C) =", B && (A || C));
var arr = [false, "ABD", 113113, null, "", '13qed'];
arr.map(function (item) { return console.log("type " + item + " = ", typeof item); });
console.log("-------------------Lab 9/12------------------------");
var student = {
    isStudent: true,
    name: "John",
    id: 5933606023,
    detail: {
        age: 19,
        yearIn: 2019
    },
    GPAX: 2.78
};
var student2 = {};
for (var keys in student) {
    student2[keys] = student[keys];
}
console.log(student2);
student2.name = null;
console.log(student.name);
for (var key in student2) {
    console.log(key + " : " + student2[key]);
}
console.log("-------------------------------------------");
student.isActive = true;
for (var key in student) {
    console.log(key + " : " + student[key]);
}
console.log("-------------------------------------------");
delete student.isActive;
for (var key in student) {
    console.log(key + " : " + student[key]);
}
console.log("-------------------------------------------");
console.log("-----------------------SLIDE219--------------------");
var stringLab = 'Apple, Cat, Zoo, Bird, Dog';
var input = stringLab.split(', ').sort();
console.log(input);
var array2 = [123, 132, 423, 423, 12345, 5343, 52, 10904, 64];
console.log(array2.filter(function (item) { return (item + '').startsWith('1'); }));
var array3 = ["Apple", "Mango", "Cat", "Banana"];
array3.splice(2, 1, "Orange");
console.log(array3);
console.log("-----------------------SLIDE241--------------------");
var heroes = [
    {
        id: "a001",
        name: "Thor",
        weapons: ["axe", "hammer"]
    },
    {
        id: "a002",
        name: "Tony",
        weapons: ["iron suite"]
    },
];
var heroesMap = new Map();
heroes.map(function (item) { return heroesMap.set(item.id, item); });
console.log(heroesMap);
console.log(heroesMap.get('a001'));
console.log(heroesMap.get('a002'));
heroesMap["delete"]('a001');
console.log('Delete a001');
console.log(heroesMap);
console.log("-----------------------SLIDE328--------------------");
var areaRectangle = function (width, lengthh) {
    var area = width * lengthh;
    return area;
};
console.log("Area 3,7 : " + areaRectangle(3, 7));
var isPrime = function (num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
};
console.log("37 isPrime : " + isPrime(37));
console.log("39 isPrime : " + isPrime(39));
console.log("-----------------------SLIDE336--------------------");
console.log("interface example");
console.log("-----------------------SLIDE351--------------------");
var translationEnum;
(function (translationEnum) {
    translationEnum["English"] = "English";
    translationEnum["Thai"] = "Thai";
    translationEnum["French"] = "French";
    translationEnum["Dutch"] = "Dutch";
})(translationEnum || (translationEnum = {}));
var switchEnum = function (code) {
    switch (code) {
        case 1:
            return translationEnum.English;
        case 2:
            return translationEnum.Thai;
        case 3:
            return translationEnum.French;
        case 4:
            return translationEnum.Dutch;
        default:
            return translationEnum.English;
    }
};
console.log("input 1 :", switchEnum(1));
console.log("input 2 :", switchEnum(2));
console.log("input 3 :", switchEnum(3));
console.log("input 4 :", switchEnum(4));
console.log("-----------------------SLIDE362--------------------");
var arrNumber = new Array();
arrNumber.push(3);
var studentDetail = new Map();
var std = {
    studentID: 9999,
    name: 'John',
    surname: 'Doe'
};
studentDetail.set('007', std);
console.log(studentDetail);
