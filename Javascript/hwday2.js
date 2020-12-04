//1
let array1 = [1,2,30,400];
let array2=array1.map(item=>item*2);
console.log("----------------1.1--------------");
console.log(array2)


//2

array1 = [1,2,3,4]
array2=array1.map(item=>item+"");
console.log("----------------1.2--------------");
console.log(array2)

//3
array1 = [1, '1', 2, {}]
array2=array1.map(item=>typeof item);
console.log("----------------1.3--------------");
console.log(array2)

//4
array1 = ['apple', 'banana', 'orange']
array2=array1.map(item=>item.toUpperCase());
console.log("----------------1.4--------------");
console.log(array2)


//5
array1 = [
    {name: 'apple', age: 14},
    {name: 'banana', age: 18},
    {name: 'watermelon', age: 32},
]
array2=array1.map(item=>item.name);
console.log("----------------1.5--------------");
console.log(array2)



//6
array1 = [
    {name: 'apple', age: 14},
    {name: 'banana', age: 18},
    {name: 'watermelon', age: 32},
]
array2=array1.map(item=>item.age);
console.log("----------------1.6--------------");
console.log(array2)



//7
array1 = [
    {name: 'apple', surname: 'London'},
    {name: 'banana', surname: 'Bangkok'},
    {name: 'watermelon', surname: 'Singapore'},
]
array2=array1.map(item=>item.name+" "+item.surname);
console.log("----------------1.7--------------");
console.log(array2)



//8
array1 = [1, 3, 4, 5, 6, 7, 8]
array2=array1.map(item=>item%2==0?"even":"odd");
console.log("----------------1.8--------------");
console.log(array2)


//9
array1 = [1, -3, 2, 8 ,-3, 5]
array2=array1.map(item=>Math.abs(item));
console.log("----------------1.9--------------");
console.log(array2)


//10
array1 = [100, 200.25, 300.84, 400.3]
array2=array1.map(item=>item.toFixed(2)+"");
console.log("----------------1.10--------------");
console.log(array2)


//11
array1 = [
    {name: 'apple', birth: '2000-01-01'},
    {name: 'banana', birth: '1990-10-01'},
    {name: 'watermelon', birth: '1985-12-01'},
]
array2=array1.map(item=> {
    const {name, birth} = item;
    return {name, birth, age: 2019-birth.slice(0,4)}
});
console.log("----------------1.11--------------");
console.log(array2)



//12
array1 = [
    {name: 'apple', birth: '2000-01-01'},
    {name: 'banana', birth: '1990-10-01'},
    {name: 'watermelon', birth: '1985-12-01'},
]

array2=array1.map(item=> {
    const {name, birth} = item;
    return `<tr><td>${name}</td><td>${new Date(birth).toUTCString().slice(5,16).toLowerCase()}</td></tr>`
});
console.log("----------------1.11--------------");
console.log(array2)

//2.1
array1 = [1,2,30,400]
array2=array1.filter(item=>item>10);
console.log("----------------2.1--------------");
console.log(array2)


//2.2
array1 = [1,2,3,4]
array2=array1.filter(item=>item%2==1);
console.log("----------------2.2--------------");
console.log(array2)


//2.3
array1 = [1,'1', 2, {}]
array2=array1.filter(item=>typeof item=='number');
console.log("----------------2.3--------------");
console.log(array2)


//2.4
array1 = ['apple', 'banana', 'orange', 'pineapple', 'watermelon']
array2=array1.filter(item=>item.length>6);
console.log("----------------2.4--------------");
console.log(array2)


//2.5
array1 = [
    {name: 'apple', age: 14},
    {name: 'banana', age: 18},
    {name: 'watermelon', age: 32},
    {name: 'pineapple', age: 16},
    {name: 'peach', age: 24},
]
array2=array1.filter(item=>item.age<18);
console.log("----------------2.5--------------");
console.log(array2)




//2.6
array1 = [
    {name: 'apple', age: 14},
    {name: 'banana', age: 18},
    {name: 'watermelon', age: 32},
    {name: 'pineapple', age: 16},
    {name: 'peach', age: 24},
]
array2=array1.filter(item=>item.age!=32);
console.log("----------------2.6--------------");
console.log(array2)

//2.7
array1 = [1,-3,2,8,-4,5]
array2=array1.filter(item=>item>0);
console.log("----------------2.7--------------");
console.log(array2)


//2.8
array1 = [1,3,4,5,6,7,8]
array2=array1.filter(item=>item%3==0);
console.log("----------------2.8--------------");
console.log(array2)


//2.9
array1 = ['peach', 1, -3, '2', {}, []]
array2=array1.filter(item=>typeof item =='string');
console.log("----------------2.9--------------");
console.log(array2)


//2.10
array1 = ['APPLE', 'appLE', 'PEACH', 'PEach']
array2=array1.filter(item=>item==item.toUpperCase());
console.log("----------------2.10--------------");
console.log(array2)


//2.11
array1 = [
    {name: 'apple', birth: '2001-01-01'},
    {name: 'banana', birth: '1990-10-10'},
    {name: 'watermelon', birth: '1985-12-30'},
    {name: 'peach', birth: '2002-10-13'},
]
array2=array1.filter(item=>item.birth.slice(5,7)==10);
console.log("----------------2.11--------------");
console.log(array2)



//2.12
array1 = [
    {name: 'apple', birth: '2001-01-01'},
    {name: 'banana', birth: '1990-10-10'},
    {name: 'watermelon', birth: '1985-12-30'},
    {name: 'peach', birth: '2002-10-13'},
]
array2=array1.filter(item=>parseInt(item.birth.slice(0,5))<2000);
console.log("----------------2.12--------------");
console.log(array2)