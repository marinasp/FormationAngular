//http://reactivex.io/rxjs/manual/overview.html#choose-an-operator

let Observable = Rx.Observable;

//create observable
let values = Observable.of('Hello','World',2017);

let interval = Observable.interval(500) //emet toutes les 500ms
                        .map((x) => x * 10)
                        .take(10);// operator qui arrête l'emission après 10 itérations

interval.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('completed')
);


let myString = "Aujourd'hui on voit les observables avec Rxjs";
let timer = Observable.timer(300, 100)
                      .do(x => console.log('avant map',x))
                      .map(x => myString[x])
                      .do(x => console.log('apres map',x))
                      .take(myString.length);

let container = document.querySelector("#container");
timer.subscribe(
    (value) => container.innerHTML += value,
    (error) => console.log(error),
    () => console.log('completed')
);

