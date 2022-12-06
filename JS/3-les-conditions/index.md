# Les conditions

Des programmes est donc une sequence d'instructions. Quelques fois, nous aimerons seulement executer certaines
instructions dans des cas precis. C'est ici que les boucles viennent en aide.

Les conditions vont nous permettre d'exécuter un bloc d'instruction dans un cas particulier.

## 1. Le test simple

Le test simple est un bloc execution qu'est executer si une condition est vraie ou fausse.

Le test doit etre effectuer entre les parentheses du mot clef `if`. Si la condition est vraie, le bloc est executer.

Dans notre exemple suivant, nous voulons offrir les frais de port si une commande a un montant plus grand que 100.

Nous pouvons comparer 2 chiffres grâce à l'opérateur `>` ou `<` (plus d'info plus tard dans le chapitre). Une comparison
dans JS renvoie donc toujours vrai ou faux.

Si le montant est donc plus grand que, nous écrasons les frais de port à 0.

```js
let montant = 120;
let port = 5;

if (montant > 100) {
    port = 0;
}
```

## 2. Le test si sinon

Dans le cas precedent, si la condition n'est pas obtenue, il ne se passe rien. Si nous voulons faire quelque chose si la
condition n'est pas acquise, nous pouvons utiliser le mot clef `else`, qui signifie sinon.

Dans notre exemple, nous aimerons logguer le status d'une personne par rapport à son âge. Si son âge est en dessous de
18, nous voulons logguer 'Mineur', sinon nous désirons logguer 'Majeur'.

```js
let age = 17;

if (age < 18) {
    console.log('Mineur');
} else {
    console.log('Majeur');
}
```

## 3. Enchainement de conditions

Il est possible d'enchainer plusieurs conditions. Pour chaque bloc apres l'if, sauf le dernier, ajouter `if else` avec
un nouveau bloc.

Pour chaque test de condition, il est :

- obligatoir d'avoir 1 `if`
- optionel d'avoir plusieurs `if else`
- optionel d'avoir 1 `else`

Reprenons le premier exemple avec les frais de port. Cette fois si nous voulons du palier.

- Si le montant est entre 0 et 50 euros, les frais sont à 10 euros
- Si le montant est entre 50 et 100 euros, les frais sont à 5 euros
- Si le montant est plus que 100, les frais sont à 0 euros

```js
let montant = 120;
let port;

if (montant < 50) {
    port = 10;
} else if (montant < 100) {
    port = 5;
} else {
    port = 0;
}
```

## 4. Multiples enchainements

Quand nous avons beaucoup de `if else`, le code peut devenir difficile à lire. Si les conditions sont des tests
d'égalités (donc pas plus petit / plus grand que), il est possible de remplacer le test par un `switch`

Nous utilisons donc le mot clef `switch` avec entre parentheses la valeur a testé

Finalement, nous allons tester chaque valeur à tester dans une 'branche'. Une branche est definie par

- Le mot clef `case` suivi par la valeur contre la quel nous devons comparer, suivi d'un `:`
- Le bloc d'instruction a executer si la condition est vrai
- Le mot clef `break` pour quitter le switch. Si on oublie le break, le switch continue à tester les conditions
  suivantes

Si aucun casé n'est executer, il est optionnellement possible de definir un cas par defaut

- Le mot clef `default`, suivi de `:`
- Le bloc d'instruction a executer

Le default est donc seulement exectuer si aucun casé n'a exectute

Pour notre exemple, nous voulons traduire un nombre par son jour correspondant dans la semaine (1 = 'Lundi', 2 = '
Mardi', ..., 7 = 'Dimanche'). Si le chiffre est autre que 1-7, nous le disons dans la variable.

```js
let jourEnNombre = 3;
let jour;

switch (jourEnNombre) {
    case 1:
        jour = 'Lundi';
        break;
    case 2:
        jour = 'Mardi';
        break;
    case 3:
        jour = 'Mercredi';
        break;
    case 4:
        jour = 'Jeudi';
        break;
    case 5:
        jour = 'Vendredi';
        break;
    case 6:
        jour = 'Samedi';
        break;
    case 7:
        jour = 'Dimanche';
        break;
    default:
        jour = 'Existe pas';
}
```

## 5. Operateur ternaire

Il est possible d'assigner une valeur à une variable base sur une condition. Si la condition est vraie, nous assignons une
valeur, sinon une autre.

La syntax est :

```js
let maVariable = condition ? valeurSiVrai : valeurSiFaux;
```

Si la condition est vrai, `maVariable` contiendra `valeurSiVrai`, sinon elle contiendra `valeurSiFaux`.

Un exemple avec les chiffres du test simple

```js
let montant = 120;
let port = montant > 100 ? 0 : 5;
```

## 6. Definir une condition

Comme nous l'avons deja vu, il est possible de definir une condition, par exemple

```js
let montant = 100;
let plusGrandQue100 = montant > 100;
```

La partie `montant > 100` est donc la condition dans ses instructions. Une condition retourne toujours un resultat de
type boolean. Se resultat peut ainsi aussi etre stocker dans une variable comme dans l'exemple au dessu.

Il existe plusieurs operateurs de condition.

### 6.1 L'opérateur d'egalite

L'opérateur d'egalite sert à comparer si 2 valeurs sont egales. Il existe 2 variantes :

- `==` Compare 2 valeurs sans comparer le type, par exemple ses 2 conditions sont vraies

```js
let condition1 = 5 == 5; // true
let condition2 = 5 == '5'; // true
```

- `===` Compare 2 valuers en comparant aussi le type, dans le cas prochain, la premiere condition est vraie, la seconde
  fausse

```js
let condition1 = 5 === 5; // true
let condition2 = 5 === '5'; // false
```

### 6.2 L'opérateur de negation

Il est aussi possible de comparer si 2 valuers ne sont pas le meme. Mᵉ principe qu'avec l'egalite, il y a 2 variantes

- `!=` Ne compare pas le type

```js
let condition1 = 5 != 6; // true
let condition2 = 5 != '6'; // true
```

- `!==` Compare avec le type

```js
let condition1 = 5 !== 5; // false
let condition2 = 5 !== '5'; // true
```

Il est aussi possible d'ajouter le `!` dans un test de condition. Le bloc est executer si la condition est `false` dans
ce cas.

Dans l'exemple suivant, on veut seulement executer le bloc si on n'est pas majeur.

```js
let age = 18;
let estMajeur = age >= 18;

if (!estMajeur) {
    console.log("Je suis majeur");
}
```

### 6.3 Autres operateurs

Il existe encore quelques autres operateurs

- `x < y`: x est plus petit que y
- `x <= y`: x est plus petit ou egal a y
- `x > y`: x est plus grand que y
- `x >= y`: x est plus grand ou egal a y

### 6.4 Combiner des conditions

Il est possible de combiner 2 ou plusieurs conditions.

Si un test doit satisfaire une condition OU une autre, l'opérateur `||` est utilisé.

```js
let a = 10;
let b = 20;

if (a === 10 || b === 10) {
    console.log('Un des 2 chiffres est 10');
}
```

Si un test doit satisfaire une condition ET a une autre, l'opérateur `&&` est utilisé.

```js
let a = 10;
let b = 20;

if (a === 10 && b === 10) {
    console.log('Les 2 chiffres sont 10');
}
```

Nous ne sommes pas limites à 2 conditions, on peut en enchainer autant que l'on veut.

```js
let a = 20;
let b = 10;
let c = 11;

if (a === 20 || b === 10 && c !== 10) {
    // Instructions ...
}
```

## 7. Excercices
[1-conditions.js](./1-conditions.js)