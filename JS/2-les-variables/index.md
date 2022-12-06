# Les variables

## 1. Introduction

Les variables sont une facon de stocker des donnees.

Nous réservons donc de la place en memoire pour stocker une valeur.

Le nom 'variable' est donné parce que les donner qu'une variable contient peuvent changer.

## 2. Declaration d'une variable

La declaration d'une variable est le fait de definir un nom pour cette variable.

On a different mot clefs pour definir une variable (`var`, `let`, `const`), nous allons commencer par la plus simple, `var`.

Le nom de la variable doit etre en miniscule, et JS respecte une convention de nom `camelCase` qui veut dire
- le nom commence par une miniscule
- le nom commence par une lettre
- un espace est defini par un capital du mot qui suit (il n'est pas possible de mettre un espace dans le nom d'une variable, donc aux lieux de `mon chiffre`, on écrit `monChiffre`)

```js
var monChiffre;
```

## 3. Initialiser une variable

Initialiser une variable veut dire donner une valeur à une variable declaree.

Si nous essayons de donner une valeur à une variable non declaree, JS jetera une erreur.

```js
var monChifre;

monChifre = 10;
```

Il est possible de faire la declaration et l'initialisation d'une variable en 1 ligne.

```js
var monChiffre = 10;
```

Il est aussi possible d'ecraser une valeur d'une variable existante. Comme elle est deja defini, nous n'utilisont pas `var` quand on l'écrase

```js
var monChiffre = 10;

monChiffre = 11;
```
## 4. Les types

Quand on initialise un variable, on lui donne un type.

- `undefined`: Variable non initialiser
- `number`: Un nombre
- `string`: Une chaine de caracteres
- `object`: Un objet, qui est une structure qui combine des donnees avec leurs fonctionnalitees
- `boolean`: Un type qui contient 2 valeurs, `true`/`false` (vrai ou faux)

JavaScript est faiblement type. Cela veut dire qu'une variable n'a pas un type fixe. On peut tres bien initialiser une variable en nombre et l'ecraser avec une valeur de type string.

```js
var maVariable = 10;
maVariable = 'Bonjour';
```

Le type d'une variable peut etre vu avec l'operateur `typeof`

```js
var monChiffre = 10;
console.log(typeof monChiffre);
```

# 5. Les objets
Dans JS, tous nos types sont aussi de type objet. Nous allons decouvrir ce concept plus tard en profondeur.

Pour le moment, il faut retenir qu'un objet est un regroupement de donnees (des proprietes) avec leur fonctionnalitees (des fonctions).

Voici un exemple d'un objet, il est normal que tu ne comprennes pas encore tout, mais pour le moment, notre objet a donc 2 proprietes (nom, age), et une fonction(bonjour) qui log une phrase avec ses 2 proprietes.

```js
var personne = {
    nom: 'Borgugnons Tamara',
    age: 26,
    bonjour: function () {
        console.log('Bonjour, je suis' + nom + ' et j\'ai ' + age + 'ans.')
    }
}
```

Les proprietes et fonction d'un objet peuvent etre acceder grace à un '.', un exemple avec la personne definie ici dessu

```js
console.log(personne.nom); // Log le nom

personne.bonjour(); // Appele la fonction qui log notre message definie dans la fonction bonjour
```

## 6. Les constantes

Les constantes sont des variables qui ne peuvent pas etre ecraser une fois initialise. On utilise le mot 'const' au lieu de 'var'/'let' a la declaration.

En camelCase, le nom d'une constante doit toujours etre en majuscule.

```js
const PI = 3.1415;
```

## 7. Les blocs d'instructions

Un bloc d'instruction est un regroupement d'instruction. Le regroupement se fait grace aux accolades.

```js
{
    var monChiffre = 1;
    var monMot = 'Bonjour';
}
```

Logiquement, un bloc est toujours combiné avec quelque chose d'autre, comme une condition `if` ou une boucle `for`, plus d'info dans les prochains chapitres.

Ce qui est important à retenir maintenant, c'est qu'il existe un 3ᵉ facons de declarer une variable, avec la clef `let`.

Quand on définit une variable avec `let`, celle-ci est seulement accessible dans son bloc d'instruction, alors que le `var` est accessible en dehors de son bloc.

```js

// Mon bloc d'instruction
{
    var nom = 'Tamara';
    let age = 25;
    
    console.log(nom); // Pas de probleme
    console.log(age); // Pas de probleme

    // Bloc d'instruction imbriquer
    {
        console.log(nom); // Pas de probleme
        console.log(age); // Pas de probleme
    }
}

// En dehors du bloc
console.log(nom); // Pas de probleme
console.log(age); // Erreur, age est defini dans le bloc d'instruction
```

## 8. Excercices
[1-variables.js](./1-variables.js)