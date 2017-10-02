//permet de créer des fonctions qu'on peut mettre en pause et faire repartir à
//l'endroit ou on s'est arrêté

function* misc() {
    let a = 10;
    let b = 15;
    console.log(a+b);
    yield;
    console.log('atteint  à la 2eme exécution');
    yield
    console.log('atteint  à la 3eme exécution');
}

let miscIterator = misc();
miscIterator.next();  //display 25
miscIterator.next();  // display 2eme exécution
miscIterator.next();  // display 3eme exécution

function* decollage() {
    yield 'trois';
    yield 'deux';
    yield 'un';
    yield 'zero';
    yield 'décolllage';
}

let decollageIterator = decollage();

let handle = setInterval (()=> {
    let instruction = decollageIterator.next();
    if(instruction.done){
        clearInterval(handle);
    } else {
        console.log(instruction);
    }
}, 2000);