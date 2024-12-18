// biglietto del treno

// INPUT
// l'utente inserisce la sua età
const Userage = parseInt(prompt("inserire la propria età"));

// l'utente inserisce i km del percorso del suo viaggio
const numeroKm = parseInt(prompt("inserire il numero dei km del proprio tragitto"));

// ELABORAZIONE
// calcolo prezzo biglietto dell'utente (salvandomi il dato)
const multiply = numeroKm * 0.21;
console.log("Prezzo del biglietto: ", multiply.toFixed(10) + "€");

// applico sconto in base all'età
// SE utente < 18 anni
let Sconto20 = multiply / 100 * 20;
let Sconto40 = multiply / 100 * 40;
let sottrazione20;
let sottrazione40;

if (Userage < 18) { 
    prezzosconto20 = multiply - Sconto20;
    // ALTRIMENTI SE utente < 65 anni

} else if (Userage > 65) {
    prezzosconto40 = multiply - Sconto40;
}

// OUTPUT
// il PC ci restituisce il preventivo del prezzo del biglietto
if (Userage < 18) { 

    console.log("Preventivo biglietto scontato: ", prezzosconto20);
    console.log("Pagherai: ", prezzosconto20.toFixed(10) + "€");

// ALTRIMENTI SE utente < 65 anni
} else if (Userage > 65) {
    console.log("Preventivo biglietto scontato: ", prezzosconto40 + "€");
    console.log("Pagherai: ", prezzosconto40.toFixed(10) + "€");


// ALTRIMENTI SE utente >18 e < 65 anni
} else if (Userage > 65 && Userage > 18) {
    console.log("Preventivo biglietto scontato: ", multiply + "€");
    console.log("Pagherai: ", multiply.toFixed(10) + "€");
    }