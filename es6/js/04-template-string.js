let lastname = 'Julie';

let speech = `
Madame ${lastname},

liste des recommandations:
    - directive1
    - directive2

Cordialement,

Marina.

`;

console.log(speech);//formaté
document.write(speech); //non formaté
alert(speech);//formaté

let processTemplate = (param1,param2) => {
    console.log('param1 = '+ param1);
    console.log('param2 = '+ param2);
}

let speech2 = processTemplate`Madame ${lastname},

liste des recommandations:
    - directive1
    - directive2

Cordialement,

Marina.`;