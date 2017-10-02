let myPromise = new Promise ((result,reject) => {
console.log('je vais à une formation angular');
setTimeout(() => {
    let message = 'bien arrivé';
    resolve(message);
    reject('rien');
    },5000);
});

console.log('finish');

myPromise.then((data) => {
    console.log(data);
});

console.log('sdfghjklm');