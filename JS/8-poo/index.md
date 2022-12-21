# Programmation orientee objet
Comme nous l'avons vu le cours precedent, les objets sont donc une facon de modelise des concepts de la vraie vie dans une application (une personne, un chien, ...).

Le fait de modelise un concept grace aux objets, s'appele la programmation orientee objet.

Ceci est un cours theorique, nous allons donc utiliser du code psuedo (code qui ne marche pas, qui sert juste à montrer un exemple)

## Classes et instances
Quand nous modélisons un probleme, il est possible de creer des types (comme un string, number, ...) qui represente nos conceptes. Nous voulons par exemple modeliser une ecole. Il serrait donc possible de creer un type 'Professeur', qui correspond à notre interpretation d'un professeur.

Un professeur aurait donc 
- un nom
- le cours qu'il donne

Aussi, il peut faire certaines choses :
- se presenter a la classe
- evaluer un controle

Pour definir notre propre type, on utilise quelque chose qui s'appele une class.

Voici le psuedocode pour notre professeur

```
class Professeur
	proprietees
		nom
		cours
	constructeur
		Professeur(nom, cours)
	methodes
		evaluer(controle)
		presenter() // Imprime 'Je suis {nom}'
```

Nous avons modeliser notre proffesseur avec des proprietes, un constructeur et 2 methodes qui correspondent aux choses qu'il sait faire.

Une classe en soi ne sait rien faire, c'est un modele pour creer des objets de ce type. Chaque professeur qu'on crée à partir de la class est appelé une 'instance' de cette class. La creation d'une instance est donc possible grace au constructeur de la class.

Dans le chapitre precedent, nous avons vu qu'un constructeur est donc une fonction qui retourne un objet, cet objet est donc une instance. Le constructeur serra à partir de maintenant defini sur une class, ce qui permet d'avoir un type qui correspond à notre modele
```js
let professeur1 = new Professeur('Tamara', 'Psychologie');
let professeur2 = new Professeur('Tanguy', 'Maths');
let professeur3 = new Professeur('Cassandra', 'Sciences');
```

Les objets `professeur1`,  `professeur2`,  `professeur3`, sont donc des instances de la class `Proffesseur`. Les types de ses objets sont ainsi aussi `Professeur`.

## Heritage

Nous allons ajouter un 2ᵉ concepte à notre model, `Etudiant`

Tout comme le professeur, l'etudiant a certaines proprietees et methodes
```
class Etudiant
	proprietees
		nom
		annee
	constructeur
		Etudiant(nom, annee)
	methodes
		presenter() // Imprime 'Je suis {nom}'
```

Comme vous le voyez, l'etudiant et le professeur ont des points en commun, notamment ils ont tout les 2 un nom et savent tout les 2 se presenter.

Les classes nous permettent de creer une class 'parent', qui contient donc les choses en commun, ceci s'apelle l'heritage (les classes enfant heritent des fonctionalitees de la class parent).

Nous commençons part creer un 3ᵉ class qui contient les fonctionalitees en commun. Nous appelons cette class `Personne`.

```
class Personne
	proprietees
		nom
	constructeur
		Personne(nom, annee)
	methodes
		presenter() // Imprime 'Je suis {nom}'
```

Pour dire que nous 2 autres classes heritent de `Personne`, nous utilisons le mot clef `extends`, qui veut dire "s'etends", suivi de la class parent.

```
class Professeur : extends Personne
	proprietees
		cours
	constructeur
		Professeur(nom, cours)
	methodes
		evaluer(controle)
```
```
class Etudiant : extends Personne
	proprietees
		annee
	constructeur
		Etudiant(nom, annee)
```

Comme vous le voyez, les 2 enfants prennent toujours un nom dans le constructeur alors qu'il est defini dans le parent. Le nom reste nescessaire pour construire une personne, donc les contructeurs de l'enfant prennent toujours les properietees du parent en compte.

```js
let professeur = new Professeur('Tanguy', 'Development');
let etudiant = new Etudiant('Tamara', 1);

professeur.presenter(); // Bonjour, je suis Tanguy.
etudiant.presenter(); // Bonjour, je suis Tamara.
```

Utiliser de l'heritage apporte plusieurs benefice :
- Centraliser la logique commune
- Facilement creer des nouvelles classes du type enfant

## Le polymorphisme
Dans notre exemple precedent, le methode `presenter` sert donc à presenter la personne avec son nom. Le class de base `Personne` definie ainsi que cette methode imprime la phrase suivante : `Bonjour, je suis {nom}`.

Il est possible de donner une implementation de base sur la class parent, mais de l'ecraser et lui donner un comportement different dans les classes enfants.

Dans notre cas, nous voulons par exemple que quand le professeur se presente, il dit

`Bonjour, je suis {nom}, le professeur de {cours}.`

Et que l'etudiant dit

`Bonjour, je suis {nom} et je suis en {annee}.`

Pour faire cella, il a suffi d'ecraser la methode en la definissant sur la class enfant

```
class Professeur : extends Personne
	proprietees
		cours
	constructeur
		Professeur(nom, cours)
	methodes
		evaluer(controle)
		presenter(); // Bonjour, je suis {nom}, le professeur de {cours}.
```
```
class Etudiant : extends Personne
	proprietees
		annee
	constructeur
		Etudiant(nom, annee)
	methodes
		presenter(); // Bonjour, je suis {nom} et je suis en {annee}.
```

Ceci est optionel, si la methode enfant n'ecrase pas la methode parent, elle utilisera la methode du parent.


```js
let professeur = new Professeur('Tanguy', 'Development');
let etudiant = new Etudiant('Tamara', 1);

professeur.presenter(); // Bonjour, je suis Tanguy, le professeur de Development.
etudiant.presenter(); // Bonjour, je suis Tamara et je suis en annee 1.
```

## L'encapsulation
Le dernier point dans la programmation orientee objet est l'encapslation. Nous garderons notre exemple actuel. Par defaut, quand nous définissons des proprietes et des methodes sur un objet, elles ont 'publiques'. Cela veut dire qu'elles ont accessibles en dehors de la class

```js
let etudiant = new Etudiant('Tamara', 1);
let anneeEtudiant = etudiant.annee; // Ceci ne pose pas de probleme, annee est accessible
```

Il est possible de 'cacher' des proprietes / methodes, dans le sense ou elles seront seulement accesible dans l'objet en question, mais plus de l'exterieure.

Ceci est une question de responsabilite. Il est plus facile qu'un objet soit le seul responsable de ses proprietees.

Nous allons illustrer le probleme avec un exemple. Un etudiant peut seulement avoir acces à certains cours à partir d'une annee specifique. Il peut par exemple acceder au cours de francais à partir de la premiere annee, mais peut uniquement acceder au cours de maths à partir de sa deuxieme annee.

Une premiere implementation pourrait etre

```js
let etudiant = new Etudiant('Tamara', 1);

if(etudiant.annee >= 1) {
	// Peut s'inscrire au cours de francais
}

if(etudiant.annee >= 2) {
	// Peut s'inscrire au cours de maths
}
```

Comme vous le voyez, nous regardons en dehors de l'objet etudiant s'il peut s'inscrire par rapport à son annee. Il y a plusieurs probleme avec ce code. Le premier est que nous exposons notre proprietee annee.

Il y a donc des dependences envers elle, et si nous voulons changer des choses dans notre etudiant par rapport à l'annee, cela va casser du code qui depend d'annee.

Secondement, il est possible que le code d'inscription soit utilisé à plusieres endroit, il serrait bien de le centraliser (si l'annee pour le francais change de 1 à 2, il faudra le changer partout.)

Au lieu de donc exposer notre propriete annee, nous pouvons la rendre 'privee', et plutot exposés des methodes qui disent si on peut s'inscrire à un cours.

```
class Etudiant : extends Personne
	proprietees
		private annee // N'est plus accessible en dehors de l'objet
	constructeur
		Etudiant(nom, annee)
	methodes
		presenter();
		peutInscrireFrancais() { return this.annee >= 1;} // Annee est accesible a partir de l'objet
		peutInscrireMaths() { return this.annee >= 2;}
```
Et le code change donc en
```js
let etudiant = new Etudiant('Tamara', 1);

if(etudiant.peutInscrireFrancais()) {
	// Peut s'inscrire au cours de francais
}

if(etudiant.peutInscrireMaths()) {
	// Peut s'inscrire au cours de maths
}
```

Si nous essayons d'acceder à notre proprietee privee en dehors de l'objet

```js
let etudiant = new Etudiant('Tamara', 1);
let anneeEtudiant = etudiant.annee; // N'est plus accessible, erreur
```

Ceci donnera donc une erreur parce que la proprietee est cachee. Le seul responsable de la propriete est maintenant l'objet et faire des changements par rapport à cette proprietee est plus facile, puisqu'elle n'a plus de dependences.
