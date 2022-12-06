# Les boucles

Le but d'une boucle est de repeter un bloc d'instruction plusieurs fois.

Il y a donc 2 types de boucles
- La boucle ‘for’ (pour) → répéter avec un compteur
- La boucle ‘while’ (pendant) → répéter durant qu'une condition est vrai

## 1. La boucle `for`

La boucle `for` est la boucle qui tourne avec un compteur interne.

Cela veut dire que la boucle est responsable de definir et augmenter le compteur

La syntax est 

`for(initialisation compteur; condition compteur; incrementation compteur) { }`

Voici un exemple d'une boucle for qui s'execute 10 fois

```js
for(let i = 0; i < 10; i = i + 1) {
    console.log(i);
}
```

Nous voyons donc bien les 4 parties de la boucle :

La partie `let i = 0;` est l'init du compteur, ici la boucle nous permet de creeer un compteur.

La partie `i < 10;` est la condition du compteur. Si la condition est vraie, notre bloc d'instruction est execute.

La partie `i = i + 1;` est l'incrementation du compteur. Apres l'execution du bloc d'instruction, cette ligne est executee.

La partie `{ console.log(i); }` est notre bloc d'instruction qui est execute à chaque boucle.

La boucle est executer dans l'ordre suivant :
1. le compteur est initialisé
2. la condition est testée
   - true: La boucle est execute, le compteur est incremente, retour a 2.
   - false: On quitte la boucle.

[Excercice boucle for (1-for.js)](1-for.js)

## 2. Manipuler les boucles

Il est possible de manipuler une boucle de 2 facons : Passer a la prochaine iteration ou quitter la boucle.


La premiere option est possible grace au mot clef continue. Si on utilise `continue;` dans une boucle, il sautera l'iteration actuel.

Nous voulons par exemple log les chiffre de 0 à 9, sauf le 2 :

```js
for(let i = 0; i < 10; i = i + 1) {
    if(i === 2) {
        continue;
    }
    
    console.log(i);
}
```

Il est aussi possible de quitter une boucle avant que la condition soit atteinte. Nous voulons par exemple quitter la boucle quand le compteur est 2

```js
for(let i = 0; i < 10; i = i + 1) {
    if(i === 2) {
        break;
    }
    
    console.log(i);
}
```

Cette derniere log que 2 chiffres, 0 et 1.

## 3. Notation courte d'incrementation

Il existe une notation pour increment / decrement une variable de 1.

```js
let compteur = 0;

// Incrementation facon longue
compteur = compteur + 1;

// Incrementation facon courte
compteur++;

// Decrementation facon longue
compteur = compteur - 1;

// Decrementation facon courte
compteur--;
```

Ceci est donc utilisable dans la boucle for

Au lieu d'ecrire

```js
for(let i = 0; i < 10; i = i + 1) {
    console.log(i);
}
```
L'incrementation peut se faire de facon courte

```js
for(let i = 0; i < 10; i++) {
    console.log(i);
}
```

## 4. La boucle `while`

Le deuxieme type de boucle est la boucle `while`. Elle n'a pas de compteur et fonctionne entierement sur un test de condition simple.

La syntax est

`while(condition) {}`

Voici une boucle while qui compte de 0 à 9.

```js
let nombre = 0;

while(nombre < 10) {
    console.log(nombre);
    nombre++;
}
```

Le concept est simple :
1. On regarde la condition
   - Si vrai : le bloc est execute, retour a 1.
   - Si faux : on quitte la boucle.

Il existe aussi une boucle alternative, qui s'appelle `do while`.

Le principe est que le bloc est execute avant la condition au lieu d'apres.

```js
let nombre = 0;

do {
   console.log(nombre);
   nombre++;
} while(nombre < 10);
```

1. On exécute la condition
2. On regarde la condition
   - Si vrai : retour a 1.
   - Si faux : on quitte la boucle.

[Excercice boucle while (2-while.js)](2-while.js)