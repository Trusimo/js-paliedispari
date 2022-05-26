// // L’utente sceglie pari o dispari tramite un prompt
// // L’utente inserisce anche un numero da 1 a 5.
// // Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// // Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
// // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// // Dichiariamo chi ha vinto.
// Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer

// Gli input dell'utente
const pariodispari = prompt("Pari o dispari?");
var numeroutente = prompt("Scegli un numero da 1 a 5");

// funzione per generare il numero del computer
// function numeropc() {
//     return Math.round(Math.random() * 4) +1;
// }

var numeropc = Math.round(Math.random() * 4) +1;

var somma = numeropc + parseInt(numeroutente);

console.log(somma);

function whowins(somma) {
    if ((somma % 2 === 0) && (pariodispari === "pari") ) {
        alert("Vinci tu")
    } else if ((somma % 2 === 1) && (pariodispari === "dispari")) {
        alert("Vinci tu")
    } else {
        alert("Vince il PC")
    }
}