/* 
Calcolare il prezzo totale del viaggio, secondo queste regole:

1)il prezzo del biglietto è definito in base ai km (0.21 € al km),
2)va applicato uno sconto del 20% per i minorenni,
3)va applicato uno sconto del 40% per gli over 65.,
4)L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/

/* 
1) Dichiarazione e assegnazione variabili
- Crea una costante di tipo numerica decimale con valore 0.21 (0.21 € al km)
- Crea variabile in cui inserire numero chilometri da viaggiare.
- Crea una variabile in cui inserire età del passeggero. 
*/

/* - Crea una costante di tipo numerica decimale con valore 0.21 (0.21 € al km) */
const tariffaKm= 0.21;
console.log(tariffaKm);
console.log("Tariffa al chilometro: "+tariffaKm.toString()+" euro");
/* console.log(tariffaKm); */

/*
 - Crea variabile in cui inserire numero chilometri da viaggiare.
- Controlla che il valore inserito non sia negativo.
*/
let chilometers = prompt("Inserisci i chilometri del tuo viaggio");
console.log("I chilometri del tuo viaggio sono: "+chilometers);

/*
- Crea una variabile in cui inserire età del passeggero.
- Controlla che il valore inserito non sia negativo.
*/
let etàPasseggero=prompt("Inserisci la tua età");
console.log("La tua eta è: "+etàPasseggero);




