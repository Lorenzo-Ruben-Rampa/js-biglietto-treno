// biglietto del treno

// INPUT
// l'utente inserisce la usa età
let Userage = parseInt(prompt("inserire la propria età"));

// l'utente inserisce i km del percorso del suo viaggio
let numeroKm = parseInt(prompt("inserire il numero dei km del proprio tragitto"));

// ELABORAZIONE
// calcolo prezzo biglietto dell'utente (salvandomi il dato)
let multiply = numeroKm * 0.21;
console.log("Prezzo del biglietto: ", multiply);

// applico sconto in base all'età
// SE utente < 18 anni

let Sconto20 = multiply / 100 * 20;
let Sconto40 = multiply / 100 * 40;

let sottrazione20;
if (Userage < 18) { 
    multiply - Sconto20;
    // ALTRIMENTI SE utente < 65 anni
let sottrazione40;
} else if (Userage > 65) {
    multiply - Sconto40;
}

// OUTPUT
// il PC ci restituisce il preventivo del prezzo del biglietto
let prezzosconto20;
let prezzosconto40;
if (Userage < 18) { 
    prezzosconto20;

console.log("Preventivo biglietto scontato: ", prezzosconto20);
let prezzosconto20 = prezzosconto20.toFixed(10);

    // ALTRIMENTI SE utente < 65 anni
} else if (Userage > 65) {
    prezzosconto40;
}
console.log("Preventivo biglietto scontato: ", prezzosconto40);
let prezzosconto40 = prezzosconto40.toFixed(10);