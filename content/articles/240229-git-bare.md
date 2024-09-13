---
title: A funny usage of git bare
date: 2024-02-29
lastmod: 2024-02-29
description:
summary:
tags:
  - git
draft: true
---

# A funny usage of git bare

L'autre jour, je me suis amusé avec git bare et je pense que ça peut être interressant de vous présenter ça.

## What is git

Cela peut paraitre trivial mais ce n'est pas mauvais je faire une petite piqure de rappel.

Si on prends `git` brut de décoffrage, c’est juste un outil de versionement des fichiers. Dans le sens, versionement local. Cela parait évident mais, pour ma part, je ne l'ai jamais utilisé en tant que tel. J'ai toujours centralisé mon code sur des outils comme [GitHub](https://github.com) ou [GitLab](https://about.gitlab.com)

## Fonctionnement classique

Donc, initialement, si tu souhaites avoir ton travail local versioné, tu peux simplement faire un `git init` dans le dossier contenant tout tes fichiers (un working tree).

Ton projet versioné aura donc à présent 2 concepts. un .git et un working tree (retenez bien cela, c'est le concept qu'on va manipuler tout du long)

Maintenant, si tu veux pouvoir avoir ton travail de centralisé pour pouvoir le réutiliser sur d'autres machines ou pouvoir collaborer avec d'autres personnes, ton repo git local ne conviens plus. il faut que le versionnement soit sur un point centralisé; un volume commun ou un serveur (nous prendrons le cas classique d'un serveur git)

Comme ce serveur n'a aucune vocation à être l'environnement de travail, pas besoin de stocker en dur les fichiers. (le working tree). Ce qui signifie en clair que du côté server, c'est un `git init --bare` qui est executé pour mettre en place le projet. Aucun soucis particulier, les fichiers peuvent de toute façon être recréés grace à l'historique contenu dans .git. C'est ainsi que fonctionnent GitHub, GitLab et les autres plateformes de git en ligne. Comme il n'y a pas de vocation à travailler directement dans l'outil, le working dir n'est pas stocké. Cela permet un gain de place et cela n'empèche pas la consultation des fichiers si l'interface le permet.

Par usage, un projet contenant working tree et .git est stocké dans un dossier simple. dedans on retrouve les fichiers versionnés et un repertoire .git dédié à la gestion des versions.

Lorsque l'on se retrouve dans le cas d'un bare, on ne sotcke que le dossier .git ! (car convention, il est plus simple de le nommer my-project.git) pour identifier à quel projet il fait référence. Au final, c'est ce que l'on retrouve dans l'url d'un projet sur GitHub 🙃

du coup, par usage si je comprends bien en local ou sur le serveur tu peux avoir un dossier mon-projet.git
le .git à la fin c’est juste une aide pour savoir que c’est un repo qui contient ta config bare et le versionning

coté local, soit t’as un projet mon-projet qui contient un dossier .git avec cette histoire de versionning
Soit t’as 2 dossiers:
•⁠ ⁠mon-projet qui contient tes fichier (le working-dir)
•⁠ ⁠⁠mon-projet.git qui contient que le système de git

si tu est dans le cas où tu sépare bien les 2 dossiers du coup quand tu lances la commande git tu as 4 manières de faire (par exemple pour git status)

Depuis ton dossier mon-projet.git faut lancer

```shell
git —work-tree=“~/devel/mon-projet” status
```

Depuis n’importe où

```shell
git —-work-tree=“~/devel/mon-projet” \
   —-git-dir=“~/devel/mon-projet.git” \
    status
```

Si tu as fait un ajustement dans ta config (qui peut etre locale à projet git bare 🤯)

Depuis ton dossier mon-projet.git

```shell
git status
```

Depuis n’importe où

```shell
git —git-dir=“~/devel/mon-projet.git” status
```

Seul hic, ce fichier mon-projet.git/config ne peut pas se versioner 🙁 c’est propre à chaque environnement local…

Mise en pratique de l'exemple 3

![Example #3](./assets/git-bare-sample.png)

## Sources

https://stegosaurusdormant.com/bare-git-repo/
