// 1. Ecrire une boucle qui log les chiffres de 1 à 20
for(let i = 0; i < 20; i = i + 1) {
    console.log(i + 1);
}

// 2. Ecrire une boucle qui log les chiffres de 20 à 1
for(let i = 20; i > 0; i = i - 1) {
    console.log(i);
}

// 3. Ecrire une boucle qui compte la somme des chiffres de 1 à 10 (1+2+3+...+10) et qui log le résultat.
let resultat = 0;

for(let i = 1; i <= 10; i = i + 1) {
    resultat = resultat + i;
}

console.log(resultat);