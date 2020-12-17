let text: string;
text='Hello World';
console.log(text.length)
console.log(text.charAt(20))
console.log(text[20])
console.log("Hello"+"world")
console.log("-------------------Lab1------------------------")
console.log("microsoft excel".toUpperCase())
console.log("GOOGLE AND APPLE".toLowerCase())
let hello: string="hello world";
hello = "H"+hello.slice(1,6)+"W"+hello.slice(7);
console.log(hello);
console.log("-------------------Lab2------------------------")
console.log(text.startsWith("Hello"));
console.log(text.startsWith("World"));
console.log(text.endsWith("Hello"));
console.log(text.endsWith("World"));
console.log("Computer".slice(3,6));
console.log("Death Race".slice(0,4));
console.log("Republican".slice(2,8));
console.log("-------------------Lab3------------------------")
console.log("1,000,000 = "+1e6)
console.log("10,000,000 = "+1e7)
console.log("43,000,000,000 = "+4.3e10)
console.log("0.000012 = "+1.2e-5)
console.log("0.0000001234 = "+1.234e-7)
console.log("1e10 = "+1*(10**10))
console.log("2e5 = "+2*(10**5))
console.log("122e8 = "+122*(10**8))
console.log("1e-8 = "+1*(10**-8))
console.log("12e-5 = "+(1.2*(10**-4)).toFixed(5))
console.log("-------------------Lab4&Lab5------------------------")
let num:number[]=[100,111,55,21,99];
num.map(item =>console.log(`${item} to octa =  ${item.toString(8)}`))
num.map(items =>console.log(`${items} to hexa =  ${items.toString(16)}`))
console.log("round 12.423 = "+Math.round(12.423))
console.log("round 31313.135 = "+Math.round(31313.135))
console.log("round 42.809 = "+Math.round(42.809))

console.log("-------------------In-class 9/12/2020------------------------")
let numberr=1.23456;
console.log(Math.floor(numberr*100)/100); //1.23
console.log(Math.floor((numberr*100)/100)); //1


function randomMinMax(min:number,max:number) {
    return Math.random()* (max - min) + min;
}
console.log(randomMinMax(-20,39));
let A:boolean,C:boolean = false;
let B:boolean = true;
console.log("A||(B&&C) =",A||(B&&C));
console.log("A||(B||C) =",A||(B||C));
console.log("B&&(A||C) =",B&&(A||C));

let arr=[false,"ABD",113113,null,"",'13qed'];
arr.map(item=>console.log(`type ${item} = `,typeof item))

console.log("-------------------Lab 9/12------------------------")

let student:any={
    isStudent: true,
    name: "John",
    id: 5933606023,
    detail :{
        age :19,
        yearIn:2019
    },
    GPAX: 2.78
}
let student2:any={};
for(let keys in student){
    student2[keys]=student[keys];
}
console.log(student2);
student2.name= null;
console.log(student.name)
for(let key in student2){
    console.log(`${key} : ${student2[key]}`)
}
console.log("-------------------------------------------")
student.isActive=true;
for(let key in student){
    console.log(`${key} : ${student[key]}`)
}
console.log("-------------------------------------------")
delete student.isActive;
for(let key in student){
    console.log(`${key} : ${student[key]}`)
}
console.log("-------------------------------------------")
console.log("-----------------------SLIDE219--------------------")
let stringLab:string='Apple, Cat, Zoo, Bird, Dog';
let input:string[]=stringLab.split(', ').sort();
console.log(input);
let array2:number[]=[123,132,423,423,12345,5343,52,10904,64];
console.log(array2.filter(item=>(item+'').startsWith('1')));
let array3:string[]=["Apple","Mango","Cat","Banana"];
array3.splice(2,1,"Orange");
console.log(array3)
console.log("-----------------------SLIDE241--------------------")
const heroes= [
    {
        id:"a001",
        name:"Thor",
        weapons:["axe","hammer"],
    },
    {
        id:"a002",
        name:"Tony",
        weapons:["iron suite"],
    },
]
let heroesMap=new Map();
heroes.map(item=>heroesMap.set(item.id,item));
console.log(heroesMap);
console.log(heroesMap.get('a001'));
console.log(heroesMap.get('a002'));
heroesMap.delete('a001');
console.log('Delete a001');
console.log(heroesMap);

console.log("-----------------------SLIDE328--------------------")
let areaRectangle = (width:number,lengthh:number)=>{
    let area=width*lengthh;
    return area;
}
console.log("Area 3,7 : "+areaRectangle(3,7));
let isPrime = (num:number) => {
    for(let i = 2; i < num; i++){
        if(num % i == 0) {
            return false;
        }            
    }
    return num > 1;
}
console.log("37 isPrime : "+isPrime(37));
console.log("39 isPrime : "+isPrime(39));

console.log("-----------------------SLIDE336--------------------")
interface IdCard{
    idNumber:number;
    name:string;
    surname:string;
    address:string;
}
interface subject{
    subjectName:string;
}
interface subjectDetail{
    subject:subject;
    subjectCode:string;
    subjectCredit:number;
}
console.log("interface example");
console.log("-----------------------SLIDE351--------------------")
enum translationEnum{
    English='English',
    Thai='Thai',
    French='French',
    Dutch='Dutch'
}
let switchEnum=(code:number) =>{
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
}
console.log("input 1 :",switchEnum(1));
console.log("input 2 :",switchEnum(2));
console.log("input 3 :",switchEnum(3));
console.log("input 4 :",switchEnum(4));

console.log("-----------------------SLIDE362--------------------")
let arrNumber = new Array<number>();
arrNumber.push(3);
// arrNumber.push('3'); //error
interface StudentDetail{
    studentID:number;
    name:string;
    surname:string;
}
let studentDetail = new Map<string, StudentDetail>()
let std: StudentDetail={
    studentID:9999,
    name:'John',
    surname:'Doe'
}
studentDetail.set('007',std);
console.log(studentDetail);
