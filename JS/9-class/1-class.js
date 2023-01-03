// 1. Creer une class 'Animal' avec :
// - les proprietees suivantes: nom, race, age
// - un constructeur qui prend les parametres (nom, race, age), et les assigne aux bonnes proprietees
// - une fonction 'bruit' qui imprime 'Je suis {nom} et je fais du bruit !' dans la console.

// 2. Creer une class 'Chien' qui herite de 'Animal'. Le chien ne prend pas de proprietes en plus que l'animal,
// mais nous voulons que la fonction 'bruit' soit ecrasee. La fonction bruit du chien doit imprimer 'Woof, je suis {nom} !'

// 3. Creer une class 'Chat' qui herite de 'Animal'. Le chat ne prend pas de proprietes en plus que l'animal,
// mais nous voulons que la fonction 'bruit' soit ecrasee. La fonction bruit du chat doit imprimer 'Miaouw, je suis {nom} !'

// 4. Creer une class 'Insecte' qui herite de 'Animal'. L'insecte a en plus que l'animal :
// - une propriete private 'venimeux' de type boolean (true/false) qui va nous servir à determiner si l'insecte est mortel.
// - constructeur prend donc les memes parametres qu'animal + 'venimeux'.
// - une methode 'attaque'. Cette methode va imprimer des choses differentes par rapport à notre boolean 'venimeux' :
//   → si venimeux est 'true', nous imprimons : 'Je suis mort !'
//   → si venimeux est 'false', nous imprimons : 'Aille, ça fait mal !'