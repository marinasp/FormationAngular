//ES5
var fruits = ['fraise', 'bananes','poire','pomme'];
console.log(fruits[0]);
console.log(fruits[1]);

//ES6
let [straberry,,,apple] =  ['fraise', 'bananes','poire','pomme'];
console.log(straberry);
console.log(apple);

//ES5

var dog = {
    name: 'tchatcha',
    age: 1,
    color: 'black'
}

console.log(dog.name);

//ES6
let {name,color}= {
    name: 'tchatcha',
    age: 1,
    color: 'black'
};
console.log(name);
console.log(color);