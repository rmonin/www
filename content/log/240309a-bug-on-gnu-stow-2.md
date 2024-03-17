---
title: Bug on GNU Stow 2/2
date: 2024-03-09
lastmod: 2024-03-09
description: "Identify and troubleshoot bugs in GNU Stow: Part 2"
tags:
  - stow
  - bug
  - fix
draft: false
---

# Bug on GNU Stow (continuation)

This is a continuation of the log entry [Bug on GNU Stow 1/2](240308a-bug-on-gnu-stow.md)

## Getting some more history info

I compared [diff on github](https://github.com/aspiers/stow/compare/v2.2.2...v2.3.1) of lastest version (v2.3.1) and previous major version without `--dotfiles` param included (v2.2.2)

Then checked some [thread](https://lists.gnu.org/archive/html/stow-devel/2011-11/msg00003.html|) and files for my personal knowledge of history and vision of this project

- [AUTHORS](https://raw.githubusercontent.com/aspiers/stow/master/AUTHORS),
- [NEWS](https://raw.githubusercontent.com/aspiers/stow/master/NEWS),
- [README.md](https://raw.githubusercontent.com/aspiers/stow/master/README.md),
- [THANKS](https://raw.githubusercontent.com/aspiers/stow/master/THANKS) and
- [TODO](https://raw.githubusercontent.com/aspiers/stow/master/TODO)

## Retrieve code to play with

I [previously](/log/240308a-bug-in-gnu-stow/#check-source-code) cloned original repo from [Savannah GNU's forge](https://savannah.gnu.org/projects/stow). So, in addition I forked github repo and aggregated everything on same local git project and checked [INSTALL.md](https://raw.githubusercontent.com/aspiers/stow/master/INSTALL.md)

```
$ cd ~/Devel/GNU/stow
$ git remote add aspiers git@github.com:aspiers/stow.git
$ git remote add rmonin git@github.com:rmonin/stow.git
$ git remote -v                                         
aspiers git@github.com:aspiers/stow.git (fetch)
aspiers git@github.com:aspiers/stow.git (push)
origin  https://git.savannah.gnu.org/git/stow.git/ (fetch)
origin  https://git.savannah.gnu.org/git/stow.git/ (push)
rmonin  git@github.com:rmonin/stow.git (fetch)
rmonin  git@github.com:rmonin/stow.git (push)
```
