# Les objets
## 1. Les bases

Un objet est un collection de variables et fonctions, connu sous le nom de proprietes et methodes.

Jusqu'a maintenant, nous avons definis des objets de la facons suivante:

```js
let personne = {
	nom: 'Tamara',
	bonjour() {
		console.log('Bonjour, je suis' + this.nom);
	}
};
```

Et nous pouvons donc utiliser les proprietes et methodes d'un objet avec la notation du point `.`

```js
let nom = personne.nom; // Contient 'Tamara'
personne.bonjour(); // 'Bonjour, je suis Tamara'
```

Il est aussi possible de imbriquer des objets. Par exemple si nous voulons que la propriete `nom` de `personne`, soit en faite un objet avec le prenom et le nom de famille, c'est possible.

```js
let personne = {
	nom: {
		prenom: 'Tamara',
		famille: 'Borgugnons'
	},
	bonjour() {
		console.log('Bonjour, je suis' + this.nom);
	}
};
```

et pour avoir acces a ses proprietes imbriques

```js
let prenom = personne.nom.prenom; // Contient 'Tamara'
let nomDeFamille = personne.nom.famille; // Contient 'Borgugnons'
```
Il est aussi possible de changer un propriete d'un objet.
```js
let personne = {
	nom: 'Tamara'
};

personne.nom = 'Tanguy'; // Le nom est change de Tamara vers Tanguy
```

## 2. Le mot clef `this`

Dans le premier exemple, dans la function nous voyons le mot clef `this`

```js
let personne = {
	nom: 'Tamara',
	bonjour() {
		console.log('Bonjour, je suis' + this.nom);
	}
};
```

`this` est le mot clef pour acceder l'objet sur lequel on travaille. Dans l'exemple au dessu, `this` est egale a l'objet `personne`.

Quand on travaille a l'interieur d'un objet, si on veut acceder a nos propre proprietes ou fonctions, nous devons utiliser `this`.

## 3. Introduction aux constructeurs

Jusqu'a maintenant, traiter 1 seul objet en isolation est facile. Que faire quand nous devons creer et gerer plusieurs objets ?

Un exemple

```js
let personne1 = {
	nom: 'Tamara',
	bonjour() {
		console.log('Bonjor, je sis' + this.nom);
	}
};

let personne2 = {
	nom: 'Tanguy',
	bonjour() {
		console.log('Bonjor, je sis' + this.nom);
	}
};

let personne3 = {
	nom: 'Daimey',
	bonjour() {
		console.log('Bonjor, je sis' + this.nom);
	}
};
```

Nous avons fait un copier/coller de notre premiere personne, mais apres reflections nous avons fait une faute de frappe dans la methode. Maintenant il faut donc aller changer partout la faute, ceci n'est pas efficace est ouvert a l'erreur.

Il faut donc un facon de unifier la creation de notre objet, et celle est exactement ce que un constructeur fait.

### 3.1 Premiere version

Une premiere facon de faire la construction et grace a une simple methode qui fait la construction pour nous

```js
// Fonction constructeur
function creerPersonne(nom) {
	let personne = {};
	
	personne.nom = nom; // Il est possible d'ajouter des propriete apres la creation de l'objet
	personne.bonjour = function() {
		console.log('Bonjour, je suis' + this.nom);
	}
	
	return personne;
}

// Creation des objets
let personne1 = creerPersonne('Tamara');
let personne2 = creerPersonne('Tanguy');
let personne3 = creerPersonne('Daimey');
```

Maintenant si nous avons un probleme, il suffit de changer la fonction `creerPersonne` et le tour est joue.

### 3.2 Version finale

La creation d'un objet a tellement etait utilise, que JS a simplifie la vie au developeur et on creer un notation de fonction expres pour la creation des objets, qui est donc plus courte.

La premiere etape et de renommer la fonction:
- Elle doit commencer avec une majuscule
- Le nom doit etre egale au type d'objet que l'on veut creer (Personne, Animal, ...)

La fait la creation de l'objet pour nous, plus besoin de le creer n'y de le retourner. La fonction doit tout simplement attribuer les propriete et les methodes sur le mot clef `this`.

```js
// Fonction constructeur
function Personne(nom) {
	this.nom = nom; 
	this.bonjour = function() {
		console.log('Bonjour, je suis' + this.nom);
	}
}
```

Ceci est possible grace au mot clef `new`, qui veut dire 'nouveau'. Nous devons appeler cette nouvelle fonction avec `new` devant, grace a se mot clef, la fonction se transforme donc en constructeur, et utilisera le mot `this` correctement dans la fonction

```js
let personne1 = new Personne('Tamara');
let personne2 = new Personne('Tanguy');
let personne3 = new Personne('Daimey');
```
