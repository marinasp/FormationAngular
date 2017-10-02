//http://reactivex.io/rxjs/manual/overview.html#choose-an-operator

let Observable = Rx.Observable;

//create observable
let values = Observable.of('Hello','World',2017);

values.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('completed')
);

//l'opérateur of crée un observable qui emet toutes mes valeurs
//passées en arguments les unes après les autres et qui termine par émettre une notification pour le complete

//créer un observable à partir d'un tableau avec l'operator from
let fruitsArray = ['fraise','pomme','banane'];
let fruitsObservable = Observable.from(fruitsArray);
fruitsObservable.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('completed')
);

//crée un observable depuis une promesse
//utiliser l'api github pour récupérer les emojis
let url = 'https://api.github.com/emojis';

let emojisObservable = Observable.from($.getJSON(url));

emojisObservable.subscribe(
    (emoji) => console.log(emoji),
    (error) => console.log(error),
    () => console.log('completed')
);

