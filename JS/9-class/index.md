# Les classes

Le cours precedent, nous avons vu la theorie de la programmation oriente objets. Ce chapitre si va appliquer cette
theorie dans JS.

## Definir une class

Dans JS, nous pouvons definir une class grace au mot clef `class`, suivi du nom de la class et d'un bloc d'instruction.

```js
class Personne {

}
```

## Definir les parametres

Pour definir une propriete sur la class, ill suffi d'ajouter le nom de la propriete (pas de `let`).

```js
class Personne {
    nom;
    age;
}
```

## Definir le constructeur

Nous pouvons aussi ajouter un constructeur à notre class, grace au mot clef `constructor`

```js
class Personne {
    nom;
    age;

    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
}
```

Notre constructeur prend un nom et un âge en parametre. Pour assigner ses parametre au properietes de la class (qui ont
le meme nom), nous utilisons le mot clef `this`. `this` est utilisé dans une classe pour acceder aux proprietees et
methodes de la class. Comme ça, nous pouvons faire la distinction entre les parametres du constructeur et les proprietees
de la class.

Le constructeur est optionel dans un class, si nous ne definissons pas de constructeur, JS va en ajouter un 'vide' pour
nous.

Ceci :

```js
class Personne {
    nom;
    age;
}
```

Est donc le meme que ceci :

```js
class Personne {
    nom;
    age;

    constructor() {
    }
}
```

## Definir des function

Pour definir une fonction dans notre class, il suffit de l'ajouter en dessous du constructeur :

```js
class Personne {
    nom;
    age;

    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    presenter() {
        console.log("Bonjour, je suis " + this.nom + ", et j'ai " + this.age + " ans.")
    }
}
```

## Creer des instances de notre class

Pour construire notre class, rien ne change. Nous utilisons le nom de la class avec le mot clef `new` qui va appeler le
constructeur de la class.

```js
let tanguy = new Personne("Tanguy", 27);
let tamara = new Personne("Tamara", 26);

console.log(tanguy.age) // 27
tamara.presenter(); // Bonjour, je suis Tamara et j'ai 26 ans.
```

Les objets `tanguy` et `tamara` sont donc nes **instances** de la class `Personne`.

## Heritage

Pour heriter d'une class, il suffit d'ajouter le mot clef `extends` derriere le nom de notre class, suivi de la class
que l'on veut heriter.

Nous allons creer une nouvelle class `Professeur` qui herite de personne.

```js
class Professeur extends Personne {
    cours;

    constructor(nom, age, cours) {
        super(nom, age);
        this.cours = cours;
    }

    evaluer(controle, points) {
        console.log("Je donne un " + points + " pour le controle " + controle + ".");
    }
}
```

Un nouveau mot clef surgit, `super`. Le constructeur de notre class prend toujours les meme parametres que notre personne, avec 1 en plus qui correspond au cours que le prof donne.

`super` est la facons pour l'enfant d'appeler le constructeur de la class parent. Dans le constructeur de la class enfant, le constructeur du parent doit toujours etre appeler en premier. Seulement apres l'enfant peut faire la construction de ses proprietees propre, comme cours dans notre exemple.

## Le polymorphisme

Pour continuer notre exemple, la methode `presenter` sur la class `Personne` n'est plus suffisante pour un `Professeur`. Un professeur doit se presenter avec son cours.

Pour ecraser la methode, il suffit de definir une methode dans la class enfant avec la meme signature (nom + parametre) que celle du parent.

```js
class Professeur extends Personne {
    cours;

    constructor(nom, age, cours) {
        super(nom, age);
        this.cours = cours;
    }

    presenter() {
        console.log("Bonjour, je suis " + this.nom + ", et je donne " + this.cours + ".")
    }

    evaluer(controle, points) {
        console.log("Je donne un " + points + " pour le controle " + controle + ".");
    }
}
```

Maintenant, le professeur a une implementation differente pour se presenter, en ecrasant la methode `presenter`.

```js
let tanguy = new Professeur("Tanguy", 27, "JS");
let tamara = new Personne("Tamara", 26);

tanguy.presenter(); // Bonjour, je suis Tanguy et je donne JS.
tamara.presenter(); // Bonjour, je suis Tamara et j'ai 26 ans.
```

## L'encapsulation

De base, toutes les proprietees et methodes sont `public`, ce qui veut dire qu'elles sont accessibles en dehors de la class.

Pour rendre une propriete ou methode `private`, il suffit d'ajouter un `#` devant le nom.

Par exemple, nous voulons rendre `private` le `cours` du `Professeur`.

```js
class Professeur extends Personne {
    #cours;

    constructor(nom, age, cours) {
        super(nom, age);
        this.cours = cours;
    }

    presenter() {
        console.log("Bonjour, je suis " + this.nom + ", et je donne " + this.#cours + ".")
    }

    evaluer(controle, points) {
        console.log("Je donne un " + points + " pour le controle " + controle + ".");
    }
}
```

Quand on utilise le cours dans notre class avec `this`, il faut donc aussi ajouter la `#`.

Si nous essayons d'utiliser cours en dehors de la class

```js
let tanguy = new Professeur("Tanguy", 27, "JS");

tanguy.nom; // Aucun souci
tamara.#cours; // Erreur
```

JS lancera une erreur.

[Excercices class(1-class.js)](1-class.js)