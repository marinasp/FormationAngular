let Observable = Rx.Observable;

//create observable
let values = Observable.create((observer) => {
    //push une donnée
    observer.next("hello");
    observer.next("World");
    setTimeout(() => console.log('yello  les zamis!'),2000);
});

//pull = recupérer
values.subscribe((data) => console.log(data));

//next() push des données
//la différence avec generator es6 c'est le generator 
// renvoie un iterator sur lequel la methode next() récupère (pull)
//des données alors que le next() sur un observer push