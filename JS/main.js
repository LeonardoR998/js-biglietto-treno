// TRACCIA //

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.


Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

 - il prezzo del biglietto è definito in base ai km (0.21 € al km)

 - va applicato uno sconto del 20% per i minorenni

 - va applicato uno sconto del 40% per gli over 65.

 - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// UTILS //

const numKm = 0.21;
const userSaleMin = 20;
const userSaleMax = 40;
const userAgeMin = 18;
const userAgeMax = 66;

// RACCOLTA DATI //

// chiedo l'età del passeggero e la trasformo in numero

const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge);

// chiedo il numero di km che deve percorrere

const userKm = parseInt(prompt("Quanti chilometri effettuerai?"));
console.log(userKm);

// ELABORAZIONE //

// calcolo del biglietto in base ai km

const userKmplusnumKm = Math.floor(userKm * numKm);
console.log(userKmplusnumKm);

// SE l'utente è minorenne
if (userAge < userAgeMin) {
  //    -applico uno sconto del 20%
  const sum = (userAge * userSaleMin) / 100;
  outputmessage = "Hai uno sconto del 20% sul biglietto";
  console.log(sum);
}

// SE l'utente è over 65
if (userAge > userAgeMax) {
  //    -applico uno sconto del 40%
  const sum = (userAge * userSaleMax) / 100;
  outputmessage = "Hai uno sconto del 40% sul biglietto";
  console.log(sum);
}

// OUTPUT

alert(outputmessage);
