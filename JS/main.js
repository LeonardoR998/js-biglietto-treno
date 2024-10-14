// TRACCIA //

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.


Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

 - il prezzo del biglietto è definito in base ai km (0.21 € al km)

 - va applicato uno sconto del 20% per i minorenni

 - va applicato uno sconto del 40% per gli over 65.

 - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// UTILS //

const numKm = 0.21;

// RACCOLTA DATI //

// chiedo l'età del passeggero e la trasformo in numero

let userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge);

// chiedo il numero di km che deve percorrere

let userKm = parseInt(prompt("Quanti chilometri effettuerai?"));
console.log(userKm);

// ELABORAZIONE //

// calcolo del biglietto in base ai km

const userKmplusnumKm = Math.floor(userKm * numKm);
console.log(userKmplusnumKm);

// SE l'utente è minorenne
//    -applico uno sconto del 20%

// SE l'utente è over 65
//    -applico uno sconto del 40%
