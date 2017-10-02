//recuperer une collection

let fruits = new Set();
fruits.add('pomme').add('poires');
let fruitsIteratorEntries = fruits.entries();
console.log(fruitsIteratorEntries);

//recupère la valeur suivante d'un set iterator
//console.log(fruitsIteratorEntries.next());
if(fruitsIteratorEntries.next().done) {
    console.log('iteration terminée');
} else {
    console.log(fruitsIteratorEntries.next());
}
