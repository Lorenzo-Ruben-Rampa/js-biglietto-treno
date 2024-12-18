// biglietto del treno

// INPUT
// l'utente inserisce la sua età
const Userage = parseInt(prompt("inserire la propria età"));

// l'utente inserisce i km del percorso del suo viaggio
const numeroKm = parseInt(prompt("inserire il numero dei km del proprio tragitto"));

// ELABORAZIONE
// calcolo prezzo biglietto dell'utente (salvandomi il dato)
const prezzo = numeroKm * 0.21;

console.log("Prezzo del biglietto: ", prezzo.toFixed(2) + "€");
// applico sconto in base all'età
// SE utente < 18 anni
if (Userage < 18) { 
    let Sconto20 = prezzo / 100 * 20;
    prezzosconto20 = prezzo - Sconto20;
    console.log("Pagherai: ", prezzosconto20.toFixed(2) + "€");

// ALTRIMENTI SE utente >= 65 anni
} else if (Userage >= 65) {
    let Sconto40 = prezzo / 100 * 40;
    prezzosconto40 = prezzo - Sconto40;
    console.log("Pagherai: ", prezzosconto40.toFixed(2) + "€");

// ALTRIMENTI SE utente > 18 e < 65 anni
} else {
    console.log("Pagherai: ", prezzo.toFixed(2) + "€");
}
