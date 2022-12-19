// Ceci est 1 grand excercice qui travaille sur le meme array

// a) Creer un array avec les mots suivants 'Montre', 'Voiture', 'Ourse', 'Cuisine'
let objet = ['Montre', 'Voiture', 'Ourse', 'Cuisine'];
console.log(objet);

// b) Utiliser la methode map qui ajoute un 's' à la fin de chaque mot
function ajouteUnS(objet) {
    return objet + 's';
}

let objets = objet.map(ajouteUnS);
console.log(objets);

// c) Utiliser la methoder filter pour garder les qui sont plus grands que 6 lettres
function plusLongQue6(mot) {
    return mot.length > 6;
}

let motPlusLongQue6 = objet.filter(plusLongQue6);
console.log(motPlusLongQue6);

// d) Convertir l'array vers un string delimiter par ';', et imprimer le result
console.log(objet);
let objetEnString = objet.join(',');
console.log(objetEnString)