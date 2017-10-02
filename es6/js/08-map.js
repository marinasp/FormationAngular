let books = new Map();

books.set('author1','title1');
books.set('author2','title2');

console.log(books);
console.log(books.size);

//methode get pour lire la valeur d'un map en passant une key
console.log(books.get('author1'));

books.forEach(function (val1, val2, val3) {
    console.log(val1);
    console.log(val2);
    console.log(val3);
});

console.log(books.keys());
console.log(books.values());
console.log(books.entries());