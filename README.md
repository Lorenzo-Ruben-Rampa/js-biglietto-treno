# js-biglietto-treno

Traccia: Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Scansione fronte retro prendo la pratica accendo lo scanner accendo il pc //

Il passeggero deve inserire il n° di km da percorrere e la sua età

Calcolo il prezzo del biglietto: 0,21 € *(n° km)

 ? SE età passeggero <18: prezzo del biglietto - (prezzo del biglietto/100*20)
 ALTRIMENTI ? SE età passeggero >65: prezzo del biglietto - (prezzo del biglietto/100*40)

let n = num.toFixed(10);