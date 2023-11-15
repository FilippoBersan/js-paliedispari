'use strict';

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// function numeroComputer() {
//   let numeroRandom = Math.floor(Math.random(1) * 5);
//   console.log(numeroRandom);
// }
// numeroComputer();

// function somma(input) {
//   const numeroUtente = prompt('inserisci un numero da 1 a 5');
//   console.log(numeroUtente);
//   if (input % 2 === 0) {
//     console.log('il numero è pari');
//   }
// }

// somma();
// //

// functions
function handleUserChoice(text) {
  let avaibleWords = ['pari', 'dispari'];

  let choice = '';

  do {
    choice = prompt(text).toLowerCase();
    console.log(choice);
  } while (!avaibleWords.includes(choice));

  return choice;
}

function handleUserNumber(text, min, max) {
  let choice = '';
  do {
    choice = parseInt(prompt(text));
    console.log(choice);
  } while (choice < min || choice > max);
  return choice;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// even or odd
function isEven(num) {
  return num % 2 === 0;
}

// winner
function winner(userChoice, isEven) {
  // verifica se pari è vero
  if (userChoice === ' pari' && isEven) return true;
}

// operazioni
const userChoice = handleUserChoice('inserisci pari o dispari');
const userNumber = handleUserNumber('inserisci un numero da 1 a 5');
const computerNumber = randomNumber(1, 5);
const numberSum = userNumber + computerNumber;
const sumIsEven = isEven(numberSum);
const winner = winner(userChoice, sumIsEven);

// // loc
// if (userChoice === 'pari' || userChoice === 'dispari');
