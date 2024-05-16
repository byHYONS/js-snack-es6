# ESERCIZIO: Snack

## Snack 1:
- Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando template literal.

### Svolgimento:
1. definisco un arrey d'oggetti con nome bici e pesi;

2. dichiaro un valore iniziale `biciPiuLeggera` assegnandogli una bici all'interno dell'arrey come valore;

3. con istruzione di iterazioni ciclo il peso di tutte le bici confrontandolo con la bici di paragone;

4. tramite istruzione condizionale stabilisco che se il peso di una delle bici è minore della bici di paragone, quella sara la nouva bici con il peso più leggero:
```
for ( let i = 0; i<bici.length; i++) {
   if (bici[i].peso < biciPiuLeggera.peso) {
        biciPiuLeggera = bici[i]
    } 
}
```

5. stampo con template literal il risultato.

##### Fine


## Snack2
- Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
- Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
- Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
- Infine  creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

### Svolgimento:
1. 


##### FINE