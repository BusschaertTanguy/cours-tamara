# Les tableaux (les listes)

## 1. Introduction

Un tableau / une liste (un array en anglais) est un objet qui permet de stocker une liste de valeurs.

Il est donc possible de manipuler l'objet qui sert de list, ou de manipuler ses elements.

## 2. Creer un array

Pour creer un array, il suffit d'utiliser les crochets droits

```js
let fruits = [];
```

Ceci vous donnera un array vide.

Pour creer un array avec des valeurs, il suffit de les ajouter entre les crochets, separe d'une virgule.

```js
let fruits = ['Pomme', 'Poire', 'Orange'];
```

Cet array contient donc des strings. Vu que JS est faiblement type, il est possible de creer un array avec des types different, meme si ça n'a pas beaucoup d'utilite.

```js
let maListe = ['Bonjour', 1, true];
```

## 3. Trouver le nombre d'elements dans un array

Tout comme un string, les array ont une propriete `length` qui renvoie le nombre d'elements.

```js
let fruits = ['Pomme', 'Poire', 'Orange'];
let nombreDeFruits = fruits.length; // 3
```

Beaucoup de chose seront similaires entre le string et les array, parce que le string est en fait un array de lettre.

## 4. Acces et modification des elements

Tout comme le string, on peut avoir access aux elements grace aux crochets droits.

Ça commence donc aussi à partir de 0.

```js
let fruits = ['Pomme', 'Poire', 'Orange'];
let premierFruit = fruits[0]; // 'Pomme'
```

Pour changer la valeur d'un element, il suffit de le selectioner et de lui attribuer une nouvelle valeur.

```js
let fruits = ['Pomme', 'Poire', 'Orange'];
fruits[0] = 'Banane'; // Remplace 'Pomme' par 'Banane'
```

Il est possible d'imbriquer des array, ce qui creer donc un array multi dimensionel.

Pour avoir access aux sous elements, il suffit d'ajouter une paire de crochets en plus.

```js
let multi = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let premierArray = multi[0]; // Contient [1, 2, 3]
let premierElementPremierArray = premierArray[0]; // Contient 1
let premierElementDeuxiemeArray = multi[1][0]; // Contient 4
```

## 5. Trouver l'index d'un element

Tout comme avec les strings, il est possible de trouver l'index d'un element grace à la methode `indexOf`, qui prend la valeur à trouver en parametre.

S'il trouve l'element en question, il renvoie sa position, sinon il renvoie -1
```js
let fruits = ['Pomme', 'Poire', 'Orange'];
let indexOrange = fruits.indexOf('Orange'); // 2
let indexBanane = fruits.indexOf('Banane'); // -1
```

## 6. Ajouter des elements a un array existant

Il est possible d'ajouter des elements à un array existant.

Si nous voulons ajouter un elements à la fin, on utilise la methode `push`, avec 1 ou plusieurs elements à ajouter.

```js
let fruits = ['Pomme', 'Poire', 'Orange'];
fruits.push('Banane', 'Kiwi'); // Elements: 'Pomme', 'Poire', 'Orange', 'Banane', 'Kiwi'
```

Si nous voulons ajouter un elements au debut, on utilise la methode `unshift`, avec 1 ou plusieurs elements à ajouter.

```js
let fruits = ['Pomme', 'Poire', 'Orange'];
fruits.unshift('Banane', 'Kiwi'); // Elements: 'Banane', 'Kiwi', 'Pomme', 'Poire', 'Orange'
```

## 7. Retirer des elements d'un array existant

Si nous voulons retirer un elements à la fin, on utilise la methode `pop` (contraire de `push`), ceci retourne aussi l'element enlever en resultat.

```js
let fruits = ['Pomme', 'Poire', 'Orange'];
let fruitEnlever = fruits.pop(); // Elements: 'Pomme', 'Poire'. Fruit enlever: 'Orange'
```

Si nous voulons retirer un elements au debut, on utilise la methode `shift` (contraire de `unshift`), ceci retourne aussi l'element enlever en resultat.

```js
let fruits = ['Pomme', 'Poire', 'Orange'];
let fruitEnlever = fruits.shift(); // Elements: 'Poire', 'Orange'. Fruit enlever: 'Pomme'
```

Il est possible d'enlever 1 ou plusieurs elements dans un array à partir d'une position, grace a la methode connu `splice`.

`splice` prend l'index de depart en premier element, et le nombre d'elements à enlever en 2ᵉ parametre.

```js
let fruits = ['Pomme', 'Poire', 'Orange'];
fruits.splice(0, 2); // Elements: 'Orange'.
```

Ceci peut etre combiner avec `indexOf` pour retirer un elements specifique. Nous voulons par exemple retirer un element sans connaitre sa position.

```js
let fruits = ['Pomme', 'Poire', 'Orange'];
let indexPoire = fruits.indexOf('Poire');

if(indexPoire !== -1) {
    fruits.splice(indexPoire, 1); // Retire 1 element a partir de la position de 'Poire'
}
```

Si nous changeons la position de 'Poire' dans l'array, ceci marche toujours.

## 8. Acceder a chaque element d'un array

Souvent, nous voulons acceder à chaque elements d'un array pour en faire quelque chose.

Une boucle `for` nous permet de faire ça, vu que l'on accède à un element via sa position et qu'on connait la taille d'un array.

```js
let fruits = ['Pomme', 'Poire', 'Orange'];

for(let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    console.log(fruit);
}
```

Parce que cette boucle est utilisée beaucoup, il existe une variante plus facile pour les array

```js
let fruits = ['Pomme', 'Poire', 'Orange'];

for(let fruit of fruits) {
    console.log(fruit);
}
```

Voici un premier excercice sur les chaptires precedents : 

[Excercices simple array(1-array-simple.js)](1-array-simple.js)

## 9. Manipulation avancees sur des array
### 9.1 Faire la meme manipulation sur chaque element

Il est possible de faire un meme manipulation sur chaque elements d'un array, grace a la methode `map`.

`map` prend une fonction en parametre, et retourne un nouvel array en resultat. Cette fonction contient la manipulation d'un element.

La methode `map` va donc appliquer cette fonction sur chaque element de l'array d'origine.

Nous voulons par exemple doubler chaque nombre dans un array :
- Nous définissons d'abord une fonction qui double un nombre et le rend en resultat.
- Nous passons cette fonction à la methode `map` sur notre array.

```js
function double(nombre) {
    return nombre * 2;
};

let nombres = [1, 2, 3];
let nombresDoublees = nombres.map(double); // [2, 4, 6]
```

Attention, map ne change pas l'array d'origine, mais retourne un nouvel array avec le resultat.

### 9.2 Filtrer un array

Il est aussi possible de filter un array, grace a la methode `filter`.

Tout comme `map`, `filter` prend une fonction en paramettre, et rend le resultat.

La methode `filter` va donc appliquer cette fonction sur chaque element de l'array d'origine.

La fonction doit retourner une valeur boolean, si la valeur retournée est `true`, l'element n'est pas retiré du resulat, et inversement.

Nous voulons par exemple garder les elements qui sont plus longs que 4 lettres :
- Nous définissons d'abord une fonction qui regarde si le `length` est plus grand que 4 (retourne `true` ou `false`)
- Nous passons cette fonction à la methode `filter` sur notre array.
```js
function plusLongQue4(mot) {
    return mot.length > 4;
};

let mots = ['Si', 'Non', 'Bonjour', 'Bac', 'Voiture'];
let motsPlusLongQue4 = mots.filter(plusLongQue4); // ['Bonjour','Voiture']
```

### 9.3 Convertir un string vers un array et inversement.

Quelques fois, les donnees ne sont pas livrees en array, mais en un long string delimiteur d'un signe (par exemple une virgule).

```js
let fruitsEnString = 'Pomme,Poire,Orange';
```

Grâce à la methode `split` qui se trouve sur `string`, nous pouvons transformer le string en array.

`split` prend le delimiteur en paramettre, et retourne un array avec chaque element.

```js
let fruitsEnString = 'Pomme,Poire,Orange';
let fruitsEnArray = fruitsEnString.split(','); // ['Pomme', 'Poire', 'Orange']
```

Inversement, nous pouvons de retour transformer un array en string avec un delimeteur, grace a la methode `join` qui se trouve sur un array.

`join` prend aussi le delimeteur en parametre, qui va concatener les elements dans un string, separees par le delimeteur.

```js
let fruitsEnArray = ['Pomme', 'Poire', 'Orange'];
let fruitsEnString = fruitsEnArray.join(','); // 'Pomme,Poire,Orange';
```

Le delimeteur peut etre n'importe quoi, une virgule, un point, un nombre, ...

Voici un excercice pour la derniere partie du cours

[Excercices avance array(1-array-simple.js)](2-array-avance.js)