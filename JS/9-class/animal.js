// 1. Creer une class 'Animal' avec :
// - les proprietees suivantes: nom, race, age
// - un constructeur qui prend les parametres (nom, race, age), et les assigne aux bonnes proprietees
// - une fonction 'bruit' qui imprime 'Je suis {nom} et je fais du bruit !' dans la console.


export class Animal {
    nom;
    race;
    age;

    constructor(nom, race, age) {
        this.nom = nom;
        this.race = race;
        this.age = age;

    }

    bruit() {
        console.log('Je suis' + this.nom + 'et je fais du bruit !')
    }
}

// 2. Creer une class 'Chien' qui herite de 'Animal'. Le chien ne prend pas de proprietes en plus que l'animal,
// mais nous voulons que la fonction 'bruit' soit ecrasee. La fonction bruit du chien doit imprimer 'Woof, je suis {nom} !'

export class Chien extends Animal {
    bruit() {
        console.log('Woof,je suis' + this.nom + '!')
    }
}