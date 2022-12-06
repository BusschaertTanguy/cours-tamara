// Nous stocker des donnees correspondant a un chien

// 1. Definir les variables suivantes
// - La race
// - Le nom du chien
// - Le poid du chien
// - L'age du chien
// - Vaccine (vrai/faux)

let race = 'Beagle';
let nom = 'Lucky';
let poids = 30;
let age = 8;
let vaccine = true;

// 2. Stocker les variables definie dans un objet

const chien1 = {
    race,
    nom,
    poids,
    age,
    vaccine
};

// 3. Creer un 2eme chien en definissant les valeurs dans la creation de l'objet

const chien2 = {
    race: 'Bouvier',
    nom: 'Neo',
    poids: 50,
    age: 3,
    vaccine: false
};

// 4. Logger le nom du premier chien, et la race du 2eme

console.log(chien1.nom);
console.log(chien2.race);