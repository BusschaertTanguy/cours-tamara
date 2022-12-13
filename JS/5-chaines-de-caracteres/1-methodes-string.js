// 1. Log la taille du string
let chaine1 = 'Bonjour, le monde';
console.log(chaine1.length);

// 2. Trouver la 2ᵉ lettre dans le string
let chaine2 = 'Coucou';
console.log(chaine2[1]);

// 3. Trouver l'avant derniere lettre du string (il faut utiliser la prop length du string)
let chaine3 = 'Merry Christmas';
console.log(chaine3[chaine3.length - 2]);

// 4. Trouver, extraire et log là sous chaine 'eau', SI elle existe.
let chaine4 = 'Manteau';
let index4 = chaine4.indexOf('eau');
if (index4 !== -1) {
    let souschaine4 = chaine4.slice(index4);
    console.log(souschaine4);
}
// 5. Trouver, extraire les 5 lettres suivantes et log là sous chaine 'col', SI elle existe.
let chaine5 = 'Décoller';
let index5 = chaine5.indexOf('col');
if (index5 !== -1) {
    let souschaine5 = chaine5.slice(index5, index5 + 5);
    console.log(souschaine5);
}
// 6. Formatter le string en minuscule, puis en majuscule et log a chaque fois resultat
let chaine6 = 'TaMArA';
let chaine6Min = chaine6.toLowerCase();
console.log(chaine6Min);
let chaine6Maj = chaine6.toUpperCase();
console.log(chaine6Maj);

// 7. Remplacer la sous-chaine 'mauvais' par 'bon' puis log le resultat
let chaine7 = 'Jammauvais';
let nouvelleChaine7 = chaine7.replace('mauvais', 'bon');
console.log(nouvelleChaine7);