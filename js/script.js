// ========= TEST ALTERT JS ==========

// alert ('Hello world');

// ======ins variabili dati 

let myName = prompt('Inserisci il tuo nome');
document.getElementById('myName').innerHTML = myName;
console.log(myName);

let lastName = prompt('Inserisci il tuo cognome');
document.getElementById('lastName').innerHTML = lastName;
console.log(lastName);

let favCol = prompt('Inserisci il tuo colore preferito');
document.getElementById('favCol').innerHTML = favCol;
console.log(favCol);

// ======generatore pw 

const pwGen = myName + lastName + favCol + 21;
document.getElementById('pwGen').innerHTML = pwGen;
console.log(pwGen);