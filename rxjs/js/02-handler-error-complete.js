let Observable = Rx.Observable;

//create observable
let values = Observable.create((observer) => {

    try {
        observer.next("hello");
        observer.next("World");
        observer.complete();
        
    } catch (error) {
        observer.error(e);
    }
    
});

values.subscribe(
    //recupère les données
    (data) => console.log(data),
    //2e handler pour récupérer les erreurs
    (error) => console.log(data),
    () => console.log('completed')
);