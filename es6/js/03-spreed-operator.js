
//ES5
var fruits = ['bananes', 'pommes'];
var vegetables = ['poireaux', 'carottes'];

//tableau à deux dimensions
var food = [fruits,vegetables];

//pour obtenir un tableau à une dimension à partir de  2 tableau
let food2 = [...fruits, ...vegetables];

//combiner avec d'autres string
let food2 = [...fruits, ...vegetables, 'navets'];

//utiliser les spreeds dans une fonction
//ES5
var mixer = function (ing1, ing2) {
    console.log(ing1+" avec "+ing2);

}

let mixer2 = (ing1, ing2) => console.log(ing1+" avec "+ing2);
mixer2('banane','pomme');

//avec un spreed operator
let ingredients = ['carotte','fraise'];
mixer2(...ingredients);

let mixer3 = (...args) => console.log(args.join('-'));
mixer3('fraise','carotte', 'abricot'); // result -> fraise-carotte-abricot
