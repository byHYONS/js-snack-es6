// reset 
'use strict';

// definisco un arrey d'oggetti:
const bici = [
    {
        nome: 'trek',
        peso: 6,
    },
    {
        nome: 'specialized',
        peso: 7,
    },
    {
        nome: 'bianchi',
        peso: 5,       
    },
    {
        nome: 'cannodale',
        peso: 9,
    },
    {
        nome: 'pinarello',
        peso: 8,   
    },
];

// dichiaro un valore iniziale con cui confrontare tutte le bici:
let biciPiuLeggera = bici[0];

// con istruzione di iterazione confronto il peso delle bici:
for ( let i = 0; i<bici.length; i++) {
    
    if (bici[i].peso < biciPiuLeggera.peso) {
        biciPiuLeggera = bici[i]
    }
}
console.log(biciPiuLeggera);

// stompo con template literal il risultato:
console.log(`La bici più leggera è la ${biciPiuLeggera.nome} con il peso di ${biciPiuLeggera.peso} kg.`);

// FINE
