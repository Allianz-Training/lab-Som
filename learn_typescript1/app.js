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
