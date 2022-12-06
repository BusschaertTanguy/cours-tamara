# Bonjour, le monde

## 1. C'est quoi le JavaScript ?

JavaScript est un langage de programmation sous forme de scripts. Le navigateur lit le script ligne par ligne et l'execute.

Il écoute aussi les evenements vennant du navigateur (click sur un bouton), et permet d'y reagir.

Il est aussi orienté objets. Tout dans JS est un objet, et on peut acceder au proprietes ou fonctions d'un objet via le '.'

Finalement, JS sert à rendre une page interactive et dynamique.

## 2. Bonjour, le monde

Les navigateurs savent lire le JS.

JS peut donc etre ecrit dans une page HTML

```html
<!DOCTYPE html>
<html lang="fr">
    <body>
        <h1 id="mon-h1"></h1>
    </body>
    <script>
        window.document.getElementById("mon-h1").innerHTML = "Voici mon H1";
    </script>
</html>
```

Ou dans un fichier avec l'extension .js qui est lu par le navigateur ou par un outil de developement.

## 3. La console

La console est une facon pour nos scripts de communiquer avec le developeur.

La plupart des outils (comme Webstorm, VSCode) ou le navigateur ont donc une console.

Quand une erreur se produit dans JS, elle est automatiquement ecrit dans la console.

Le developeur peut aussi manuelement ecrire quelque chose dans la console, grace a la fonction `log` sur l'objet `console`.

```js
console.log("Bonjour, le monde");
```

## 4. Les instructions

Une instruction consiste d'une ligne de code terminee par un point virgule.

```js
let monH1 = window.document.getElementById('mon-h1');
```

# 5. Les commentaires

Il est possible d'ajouter des commentaires à des scripts grace a `//`

```js
// Voici mon h1
let monH1 = window.document.getElementById('mon-h1');
```

Ou avec `/* */` pour plusieurs lignes.

Les commentaires ne sont donc pas lus par JS, ils sont là pour le developeur.