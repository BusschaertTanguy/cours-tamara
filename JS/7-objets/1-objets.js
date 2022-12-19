// 1. Creer un objet 'chien' avec, les properietees/methodes suivantes:
// - nom
// - race
// - fonction 'woof' qui imprime 'Woof, je suis un {race} nomme {nom}!' dans la console.
let chien = {
    nom: 'Lucky',
    race: 'Beagle',
    woof() {
        console.log('Woof, je suis un  ' + this.race + ' nomme ' + this.nom + '!')
    }
}

chien.woof();
// 2. Changer le nom du chien
chien.nom = 'Neo';
console.log(chien)

// 3. Creer un constructeur 'Chien' qui cree des chiens comme celui defini dans 1. Creer plusieurs chiens avec.
function Chien(nom, race) {
    this.nom = nom;
    this.race = race;
    this.woof = function () {
        console.log('Woof, je suis un  ' + this.race + ' nomme ' + this.nom + '!')
    }
}

let chien2 = new Chien('Laika', 'Malinois');
console.log(chien2);
chien2.woof();