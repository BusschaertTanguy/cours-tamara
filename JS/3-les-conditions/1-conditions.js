// 1. Définir 2 variables avec des nombres. Écrire un test conditionnel pour log le plus grand des 2 nombres dans la console.

let a = 10;
let b = 20;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

// 2. Définir une variable qui correspond au pourcentage d’une batterie. Par rapport au palier où elle se situe, on doit log différentes choses
// - Plus de 70 → “Haut”
// - Entre 30 et 70 → “Moyen”
// - En dessous de 30 → “Faible”

let batterie = 40;

if (batterie > 70) {
    console.log('Haut');
} else if (batterie > 30) {
    console.log('Moyen');
} else {
    console.log('Faible');
}

// 3. Définir une variable qui contient un nombre entre 1 et 3. Par rapport au choix du nombre, on log un message différent (obligation d'utiliser switch)
// 1 → “Bonjour, bienvenu !”
// 2 → “Quelle belle journée."
// 3 → “Au revoir.”
// Tout autre choix → “Mauvais choix”

let choix = 2;

switch (choix) {
    case 1:
        console.log('Bonjour, bienvenu !');
        break;
    case 2:
        console.log('Quelle belle journée.');
        break;
    case 3:
        console.log('Au revoir.');
        break;
    default:
        console.log('Mauvais choix.')
}

// 4. On veut log un message par rapport à l'âge de l’utilisateur.
// Définir une variable pour l’age de l’utilisateur.
// Définir une variable pour le message, et utiliser un opérateur ternaire pour initialiser le message par rapport à l'âge
// Si moins de 18 ans → "Accès interdit”
// Si 18 ou plus → “Bienvenu”

let age = 17;
let message = age < 18 ? 'Access interdit' : 'Bienvenu';
console.log(message);

// 5. Définir une variable qui correspond au PV (points de vie) d’un personnage.
// Si les points de vie sont égaux à 0, nous voulons log un message “Je suis mort.”.
// Le test de condition doit marcher sur un type ‘number’ et sur un type ‘string’

let pv = 0;

if (pv == 0) {
    console.log('Je suis mort');
}

// 6. Définir une variable qui correspond à l'argent sur un compte bancaire.
// Si le compte bancaire n’est pas 0, log dans la console “Il me reste de l’argent”.
// Attention, le test condition n’accepte que les type ‘number’

let argent = 10;

if (argent !== 0) {
    console.log('Il me reste de l’argent');
}

// 7. Une attraction accepte les personnes entre 14 et 65 ans. Définir une variable qui correspond à l'âge de la personne.
// Si la personne se situe dans la tranche d'âge, log “Amusez-vous bien”
// Sinon, log “Vous n’avez pas accès à cette attraction”
// Noter les 2 facons de regler le probleme

let agePersonne = 15;

// Facon 1
if (agePersonne < 14 || agePersonne > 65) {
    console.log('Vous n’avez pas accès à cette attraction');
} else {
    console.log('Amusez-vous bien');
}

// Facon 2
if (agePersonne >= 14 && agePersonne <= 65) {
    console.log('Amusez-vous bien');
} else {
    console.log('Vous n’avez pas accès à cette attraction');
}