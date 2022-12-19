// Ceci est 1 grand excercice qui travaille sur le meme array

// a) Creer un array 'pays' avec les pays suivant : 'Belgique', 'France', 'Allemagne'.
let pays = ['Belgique', 'France', 'Allemagne']
console.log(pays)
// b) Imprimer (log) le nombre d'elements dans l'array.
let nombreDePays = pays.length;
console.log(nombreDePays)
// c) Modifier le 2ᵉ element de l'array vers 'Pays-bas', puis imprimer le.
pays[1]='Pays-bas';
console.log(pays)
// d) Ajouter de nouveau le pays 'France' devant dans l'array, et retirer le dernier pays.
pays.unshift('France');
console.log(pays)
let paysEnlever= pays.pop()
console.log(paysEnlever)
console.log(pays)
// e) Trouver le pays 'Pays-bas', et le retirer.
let paysPaysBas =pays.indexOf('Pays-bas');
if (paysPaysBas !==-1){
    let retirePaysBas= pays.splice(paysPaysBas,1);
    console.log(retirePaysBas);
}console.log(pays)


// f) Finalement, utiliser une boucle pour imprimer chaque element.
for(let paysBoucle of pays) {
    console.log(paysBoucle);
}