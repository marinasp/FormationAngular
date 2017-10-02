let brands = new Set();

brands.add('Honda')
      .add('ducati')
      .add('triomph')
      .add('Honda')
      .add('kawazaki');

console.log(brands); //affiche une seul fois Honda

let brandsArray = ['honda', 'ducati', 'triomph', 'honda', 'Honda']; //sensible a la casse
let brands2 = new Set(brandsArray);

console.log(brands.has('honda')); //true
console.log(brands.has('Honda')); //false

console.log(brands.delete('honda')); //supprime et renvoie true
console.log(brands.has('Honda')); //retourne false 

brands.forEach(function (val1, val2, val3) {
    console.log(val1);
    console.log(val2);
    console.log(val3);
});
