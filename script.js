/* 
Calcolare il prezzo totale del viaggio, secondo queste regole:

1)il prezzo del biglietto è definito in base ai km (0.21 € al km),
2)Calcolo prezzo del viaggio.
(Va applicato uno sconto del 20% per i minorenni; va applicato uno sconto del 40% per gli over 65.)
3)L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
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
let chilometersStr = prompt("Inserisci i chilometri del tuo viaggio");
let chilometersInt= parseInt(chilometersStr);
console.log("I chilometri del tuo viaggio sono: "+chilometersStr);

/*
- Crea una variabile in cui inserire età del passeggero.
- Controlla che il valore inserito non sia negativo.
*/
let etàPasseggeroStr=prompt("Inserisci la tua età");
let etàPasseggeroInt= parseInt(etàPasseggeroStr);
console.log("La tua eta è: "+etàPasseggeroStr);

/* 
2)Calcolo il prezzo del viaggio, applicando lo sconto se necessario.
(Va applicato uno sconto del 20% per i minorenni; va applicato uno sconto del 40% per gli over 65.)
- Creo la variabile in cui assegno il prezzo pieno.
-Creo un costrutto if per controllare l'età del passeggero ed applicare eventualmente lo sconto.
*/

//calcolo il prezzo pieno
let priceTicket= chilometersInt * tariffaKm;
/* console.log(priceTicket); */

//controllo l'età del passeggero ed applico se necessario lo sconto del prezzo.
// (Va applicato uno sconto del 20% per i minorenni; va applicato uno sconto del 40% per gli over 65.)
if (etàPasseggeroInt < 18){
    //passeggero minorenne: sconto del 20%
    let sconto=priceTicket*20/100;
    //prezzo scontato
    priceTicket=priceTicket-sconto;
    /* console.log("il prezzo scontato è: "+priceTicket.toString()); */

}else if(etàPasseggeroInt > 65){
    //passeggero over65: sconto del 40%
    let sconto=priceTicket*40/100;
    //prezzo scontato
    priceTicket=priceTicket-sconto;
}

/* 
3)L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/

/* console.log(priceTicket); */

let priceTicketStr=priceTicket.toString();

priceTicket= parseFloat(priceTicketStr).toFixed(2);
console.log("Il prezzo del tuo biglietto è:");
console.log(priceTicket);






