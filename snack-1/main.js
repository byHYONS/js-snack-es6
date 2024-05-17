// reset 
'use strict';

// definisco un arrey d'oggetti:
const bici = [
    {
        nome: 'trek',
        peso: 5,
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
// let biciPiuLeggera = bici[0];

// // con istruzione di iterazione confronto il peso delle bici:
// for ( let i = 0; i<bici.length; i++) {
    
//     if (bici[i].peso < biciPiuLeggera.peso) {
//         biciPiuLeggera = bici[i]
//     }
// }
// console.log(biciPiuLeggera);

// // stompo con template literal il risultato:
// console.log(`La bici più leggera è la ${biciPiuLeggera.nome} con il peso di ${biciPiuLeggera.peso} kg.`);

// // FINE

// definisco variabile con valore il peso della prima bici:
let pesoPiuLeggero = bici[0].peso;

// con istruzione di iterazione confronto il peso delle bici:
for ( let i = 0; i<bici.length; i++) {
    
    if (bici[i].peso < pesoPiuLeggero) {
        pesoPiuLeggero = bici[i].peso
    }
}
console.log(pesoPiuLeggero);

// tramite il metodo .filter confronto il peso più leggero con il peso delle bici:
const biciPiuLeggera = bici.filter((bici, i) => {

     if (pesoPiuLeggero === bici.peso){
        return true
    }
});

console.log(biciPiuLeggera);

// stompo con template literal il risultato:
if (biciPiuLeggera.length !== 0){
    
    biciPiuLeggera.forEach(element => console.log(`La bici più leggera è la ${element.nome} con il peso di ${element.peso} kg.`));
} else {
    console.log('Non ci sono bici in elenco|');
}
;
