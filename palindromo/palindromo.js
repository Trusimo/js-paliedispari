// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function isPalindromo(parola) {

    const len = parola.length;

    // controllo solo la metà della parola
    for (let i = 0; i < len / 2; i++) {

    if (parola[i] !== parola[len - 1 - i]) {
        // (perché -1 - i????? Chiedere)

        alert("La parola non è un palindromo");
    }
    }
    alert("La parola è un palindromo");
}

var parola = prompt ("Inserisci una parola");

const verifica = isPalindromo(parola);

// perché il non palindromo si ripete N volte e poi dà palindromo?