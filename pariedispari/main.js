'use strict';

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function numeroComputer() {
  let numeroRandom = Math.floor(Math.random(1) * 5);
  console.log(numeroRandom);
}
numeroComputer();

function somma(input) {
  const numeroUtente = prompt('inserisci un numero da 1 a 5');
  console.log(numeroUtente);
  if (input % 2 === 0) {
    console.log('il numero è pari');
  }
}

somma();
