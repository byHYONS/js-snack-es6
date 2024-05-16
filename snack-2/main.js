// reset 
'use strict';

// definisco un arrey d'oggetti:
const serieA = [
    {
        nome: 'juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'torino',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'genoa',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'bologna',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'fiorentina',
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

// definisco una funzione per generare dei numeri random:
function generaRandom(min, max) {
    const risultato = Math.floor(Math.random() * (max - min +1)) + min;
    return risultato;
}

// tramite il metodo .map cambio i valori dei puntiFatti e falliSubiti con numeri random generati dalla funzione:
serieA.map((element)=>{
    element.puntiFatti = generaRandom(102, 35);
    element.falliSubiti = generaRandom(50, 5);
    // console.log(element);
});

// serieA.filter((element)=>{
//     console.log(element);
//     if (element === element.nome && element === element.falliSubiti) return true;
// });
// console.log(element);

// definisco un nuovo arrei dove inserire i risultati dei falliSubiti e il nome:
let newArrey = [];

for (let i = 0; i < serieA.length; i++) {
    newArrey[i] = { 
        nome: serieA[i]['nome'],
        falliSubiti: serieA[i]['falliSubiti'],
    }
    
    console.log(newArrey[i].nome, newArrey[i].falliSubiti)
}


// FINE


/* -------------------------------------
            ALTERNATIVE
-------------------------------------- */

// alternativa con push:
// for (let i = 0; i < serieA.length; i++) {
//     newArrey.push({ 
//         nome: serieA[i]['nome'],
//         falliSubiti: serieA[i]['falliSubiti'],
//     });
    
//     console.log(newArrey[i].nome, newArrey[i].falliSubiti)
// }

// alternativa con map:
// newArrey = serieA.map((element, i) => ({
//     nome: element['nome'],
//     falliSubiti: element['falliSubiti'],
// }))

// newArrey.forEach(element => console.log(element.nome, element.falliSubiti))


/* -------------------------------------
            ticket con Paolo
  • for...of • forEach • map • filter
-------------------------------------- */


// for (let item of serieA){
//     console.log(item.nome);
//     console.log(item.falliSubiti);
// }

// serieA.forEach((item) => {
//     console.log(item.nome);
// })

// const newTest = serieA.map((item) => {
//     return item.nome +  ' Samuele';
// })

// console.log(newTest);

// const newFilterd = serieA.filter((item) => item.nome === 'juventus' || item.nome === 'torino')
// console.log(newFilterd);
// filter ritorna un risultato solo se la condizione è vera.
