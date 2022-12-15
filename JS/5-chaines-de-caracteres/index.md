# Chaines de characteres

## 1. Les bases

Une chaine de caracteres est definie entre des guillemets. Cella peut etre un mot ou une phrase

```js
let mot = "Bonjour";
let phrase = "Bonjour, le monde.";
```

Des simples ou doubles guillements sont possibles, c'est une preference. Choisir un style et y rester.

```js
let simple = 'Bonjour';
let double = "Bonjour";
```

## 2. Echappement de caracteres

Comment faire quand on veut avoir une guillement dans notre chaine, par exemple

```js
let phrase = 'J'aime Tamara!';
```

Comme vous le voyer, JS pense que c'est la find de la chaine à notre premiere guillemet.

'Echapper' un caractere dans une chaine veut dire que l'on précise qu'il fait partie de la chaine.

Nous pouvons echapper un charactere en le prefixant de `\ `

Pour regler notre exemple :

```js
let phrase = 'J\'aime Tamara!';
```

Maintenant, la guillement dans notre phrase fait partie de la chaine.

## 3. Concaténation de chaînes

Concaténation veut dire 'attacher ensemble'. Pour attacher 2 chaines, il suffit d'utiliser l'operateir '+', comme pour les nombres.

```js
let premierMot = 'Bonjour, ';
let deuxiemeMot = 'comment ca va ?';
let phrase = premierMot + deuxiemeMot;
```

Nous ne sommes pas limiter a 2 chaines

```js
let premierMot = 'Bonjour, ';
let deuxiemeMot = 'comment ';
let troisiemeMot = 'ca va ?';
let phrase = premierMot + deuxiemeMot + troisiemeMot;
```

## 4. Nombres vs. Chaines
Que se passe-t-il quand on concatène une chaine avec un nombre ?

```js
let phrase = 'Bonjour, numero ' + 13;
```

Le nombre devient alors une chaine de caracteres.

Ça n'a pas de sense d'essayer de representer une chaine de caracteres en nombre, vu que ce n'est pas toujours possible.

Par contre, il est toujours possible de representer un nombre en chaine, d'où la decision d'en faire une chaine quand on la concat.

### 4.1 Transformer un nombre en chaine vers un nombre,

Il est tout de fois possible d'essayer de transformer une chaine vers un nombre, grace a l'objet `Number`.

```js
let nombreEnChaine = '123';
let nombre = Number(nombreEnChaine);
```

Inversement, nous pouvons de retour transformer un nombre en chaine, grace a la fonction 'toString()' que l'on peut utiliser sur une chaine

```js
let nombre = 123;
let nombreEnChaine = nombre.toString();
```

Jusqu'à maintenant, nous avons toujours vu des fonctions isolee. Certains types, comme les nombres ou les chaines, ont des fonctions definie sur eux meme.

Dans notre exemple, le type 'Number' a donc une fonction 'toString()', qui renvoie le nombre en chaine de caracteres.

## 5. Methodes utiles pour les chaines de characteres

Une chaine de characteres est un object. Il contient donc :
- Des proprietes: Des variable sur l'objet
- Des methodes : Des function sur l'objet

Les proprietes et methods d'un objet sont accessibles avec le `.`

IMPORTANT : Les methodes ne changent pas la valeur de la chaine, elle renvoie une nouvelle chaine tout en gardant la premiere intact.

### 5.1 Trouver la longeur d'une chaine

Il existe donc une propriete pour trouver la longuer d'une chaine, `length`

```js
let nom = 'Tamara';
let longuer = nom.length; // Contient le nombre 6
```

### 5.2 Trouver un charactere dans une chaine

Il est possible de trouver un charactere dans une chaine à son endroit specifique, grace a la notation crochet.

Il suffit donc d'ajouter des crochets derriere notre chaine, avec la position du charactere (commencant de 0).

```js
let nom = 'Tamara';
let premiereLettre = nom[0]; // Contient 'T'
let deuxiemeLettre = nom[1]; // Contient 'a'
```

Il est donc possible de combiner les crochets avec la propriete length pour trouver le dernier charactere

```js
let nom = 'Tanguy';
let derniereLettre = nom[nom.length - 1] // Contient 'y'
```

On fait `length - 1` parce que length renvoie la taille à partir de 1, sauf que les crochets commencent à partir de 0.

### 5.3 Trouver une sous-chaine et l'extraire

Il est possible de regarder si une sous-chaine est presente dans une chaine de chars.

Par exemple, nous voulons savoir si la chaine 'Tanguy' contient le mot 'guy'

```js
let nom = 'Tanguy';
let sousChaine = nom.indexOf('guy'); // Retourne le nombre 3
```

La methode à utiliser est `indexOf`, avec comme parametre la sous-chaine.

Le methode renvoie l'index (la position en debutant de 0) de la sous-chaine.

Si aucune sous-chaine n'est trouvee, la methode renvoie le nombre -1.

```js
let nom = 'Tamara';
let sousChaine = nom.indexOf('guy'); // Retourne le nombre -1
```

Maintenant que nous avons trouvé la position de la sous chaine, nous pouvons l'extraire dans une nouvelle variable avec la methode `slice`

```js
let nom = 'Tanguy';
let index = nom.indexOf('guy'); // Retourne le nombre 3

if(index !== -1) {
    let sousChaine = nom.slice(index); // Retourne guy
}
```

Le methode slice 'coupe' la chaine de charactere à partir d'un index (le premier parametre de la methode) et renvoie le resultat (la chaine apres la coupure)

De base, la methode slice coupe tout le restant de la chaine apres l'index, il est possible de preciser combien de chars nous voulons couper en 2ᵉ parametre

```js
let nom = 'Tanguy';
let index = nom.indexOf('guy'); // Retourne le nombre 3

if(index !== -1) {
    let sousChaine = nom.slice(index, 2); // Retourne gu
}
```

Ici, nous avons donné un 2ᵉ parametre (2) à la methode, du coup, elle nous coupe que 2 chars du restant de la chaine.

### 5.4 Changer la case

Il est possible de changer la case d'une chaine, grace aux methodes `toLowerCase` et `toUpperCase`

```js
let nom = 'Tanguy';
let lower = nom.toLowerCase(); // Contient 'tanguy'
let upper = nom.toUpperCase(); // Contient 'TANGUY'
```

### 5.5 Remplacer la partie d'une chaine

Il est possible de remplacer une partie d'une chaine par une autre.

La methode `replace` prend 2 parametres:
- La chaine a remplace
- La chaine qui remplace

```js
let nom = 'Tanguy';
let nouveauNom = nom.replace('guy', 'gay'); // Contient 'Tangay'
```

[Excercice string(1-methodes-string.js)](1-methodes-string.js)