# Les chaines de caracteres

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