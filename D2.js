/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 5;
let n2 = 20;
console.log(n1, n2);
console.log(n1 >= n2 ? n1 : n2);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let n3 = 35;
console.log(n3 !== n1 ? "not equal" : "Il numero è uguale a 5.");



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(n3 % n1 === 0 ? "divisibile per 5" : "no");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let n4 = 24;
let n5 = 19;
let somma = n4 + n5
console.log(n4, n5, somma === 8 ? "addizione uguale a 8" : "diverso da 8. Risultato = " + somma);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 51;

console.log("Totale Carrello: " + totalShoppingCart + "€");

if (totalShoppingCart >= 50) {
  console.log("Hai diritto alla spedizione gratuita");
} else {
  console.log("Devi pagare spedizione pari a 10€");
}
let totalShoppingCart2 = 49;

console.log("Totale Carrello: " + totalShoppingCart2 + "€");

if (totalShoppingCart2 >= 50) {
  console.log("Hai diritto alla spedizione gratuita");
} else {
  console.log("Devi pagare spedizione pari a 10€");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let discount = 1 / 5;
totalShoppingCart = totalShoppingCart - (totalShoppingCart * discount);
totalShoppingCart2 = totalShoppingCart2 - (totalShoppingCart2 * discount);

console.log("Totale Carrello: " + totalShoppingCart + "€");

console.log("Totale Carrello: " + totalShoppingCart2 + "€");

if (totalShoppingCart >= 50) {
  console.log("Hai diritto alla spedizione gratuita");
} else {
  console.log("Devi pagare spedizione pari a 10€");
}
if (totalShoppingCart2 >= 50) {
  console.log("Hai diritto alla spedizione gratuita");
} else {
  console.log("Devi pagare spedizione pari a 10€");
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 78, y = 12, z = 68;

if (x >= y && x >= z) {
  if (y >= z) {
    console.log(x, y, z);
  } else {
    console.log(x, z, y);
  }
} else if (y >= x && y >= z) {
  if (x >= z) {
    console.log(y, x, z);
  } else {
    console.log(y, z, x);
  }
} else {
  if (x >= y) {
    console.log(z, x, y);
  } else {
    console.log(z, y, x);
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let prompt = "25";
if (typeof prompt === "number") {
  console.log("Il valore inserito è un numero.");
} else {
  console.log("Il valore inserito non è un numero.");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(x % 2 === 0 ? "Pari" : "Dispari");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/
 
 /* SCRIVI QUI LA TUA RISPOSTA */
 let val = 7;
 let val2 = 3;
 let val3 = 34;
 if (val < 10) {
   console.log("Meno di 10");
 } else if (val < 5) {
   console.log("Meno di 5");
 } else {
   console.log("Uguale a 10 o maggiore");
 }
 if (val2 < 5) {
   console.log("Meno di 5");
 }
 if (val3 > 10) {
   console.log("Uguale a 10 o maggiore");
 }
 
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(me);
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/


/* SCRIVI QUI LA TUA RISPOSTA */
if (me.skills.length > 0) {
  me.skills = me.skills.slice(0, -1);
}

console.log(me.skills); 

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arr = [];
console.log(arr);
arr = Array.from({ length: 10 }, (_, index) => index + 1);
console.log(arr);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arr[arr.length - 1] = 100;

console.log(arr);