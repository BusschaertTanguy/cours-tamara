import {Animal, Chien} from "./animal";

// 3. Creer une class 'Chat' qui herite de 'Animal'. Le chat ne prend pas de proprietes en plus que l'animal,
// mais nous voulons que la fonction 'bruit' soit ecrasee. La fonction bruit du chat doit imprimer 'Miaouw, je suis {nom} !'
class Chat extends Animal {
    bruit() {
        console.log('Miaouuuuuuuuw,je suis' + this.nom + '!')
    }
}

// 4. Creer une class 'Insecte' qui herite de 'Animal'. L'insecte a en plus que l'animal :
// - une propriete private 'venimeux' de type boolean (true/false) qui va nous servir à determiner si l'insecte est mortel.
// - constructeur prend donc les memes parametres qu'animal + 'venimeux'.
// - une methode 'attaque'. Cette methode va imprimer des choses differentes par rapport à notre boolean 'venimeux' :
//   → si venimeux est 'true', nous imprimons : 'Je suis mort !'
//   → si venimeux est 'false', nous imprimons : 'Aille, ça fait mal !'
class Insecte extends Animal {
    #venimeux;

    constructor(nom, race, age, venimeux) {
        super(nom, race, age,);
        this.#venimeux = venimeux;
    }

    attaque() {
        if (this.#venimeux === true) {
            console.log('Je suis mort!');
        } else {
            console.log('Aille, ça fait mal !');
        }
    }
}

let scorpion = new Insecte('Poupidou','scorpoux',1000000000,true);
let coccinelle = new Insecte('scoubidouuuuu','coco',1,false);

scorpion.attaque();
coccinelle.attaque();

// 5. Exporter les classes dans un autre fichier