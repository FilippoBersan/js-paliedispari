'use strict';

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function parolaPalindroma() {
  // creo prompt parola
  let insParola = prompt('inserisci una parola');
  console.log(insParola);

  // creo variabile parola x array
  let parolaArray;

  // creo variabile parola al contrario
  let parolaReverse = '';

  // definisco la lunghezza parola
  let i = insParola.length - 1;
  console.log(i);

  while (i >= 0) {
    parolaArray = insParola[i];
    parolaReverse += parolaArray;
    console.log(parolaArray);
    i--;
  }

  console.log(parolaReverse);

  // se la parola inserita è uguale alla parola al contrario eseguisco un alert 'palindroma' altrimenti 'non è palindroma'
  if (insParola === parolaReverse) {
    alert('la parola è palindroma');
  } else {
    alert('la parola non è palindroma');
  }
}

parolaPalindroma();
