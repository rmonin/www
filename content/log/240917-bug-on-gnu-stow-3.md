---
title: Bug on GNU Stow 3/3
date: 2024-09-17
lastmod: 2024-09-17
description: "Identify and troubleshoot bugs in GNU Stow: Part 2"
tags:
  - stow
  - bug
  - fix
toc: false
draft: true
---

# Stow is fixed by the community !

This is a continuation of the log entry [Bug on GNU Stow 2/2](240309a-bug-on-gnu-stow-2.md)

Found on stow official [NEWS](https://git.savannah.gnu.org/cgit/stow.git/tree/NEWS)

```
* Changes in version 2.4.1

*** =--dotfiles= option now works correctly with ignore lists

    If the =--dotfiles= option was enabled, files in the package such
    as =dot-gitignore= would be translated to =.gitignore= prior to
    stowing, and consequently ignored by the default ignore list.
    However any file named =dot-*= in a package is obviously intended
    to be stowed as a dot file, so should not be ignored.

    To fix this, Stow now ignores based on the name in the package,
    not the potentially translated name used for stowing, and
    similarly for unstowing.

* Changes in version 2.4.0

*** --dotfiles now works with directories

    A long-standing bug preventing the --dotfiles option from working
    correctly with directories has been fixed.

    It should also works in combination with the --compat option.

*** Improved debug output

    Extra output resulting from use of the -v / --verbose flag
    now appears in a more logical and understandable way.
```