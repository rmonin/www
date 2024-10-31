---
title: Bourne Shell
date: 2024-03-13
lastmod: 2024-03-14
description: Bourne Shell scripting, commands, and best practices.
tags:
  - shell
  - cli
  - scripting
category: Digital Toolkit
toc: true
draft: false
---

# Bourne shell

## Overview

The Bourne shell is the traditional Unix shell originally written by Stephen Bourne.

v7 il the first official releae on UNIX systems and is the reference for SUS 03 spécifications

> **NOTICE** Shell on SUS 03 and above is not strictly Bourne Shell v7 but an improved version

## Metacharacters

**;**
&nbsp;&nbsp;&nbsp; **&**
&nbsp;&nbsp;&nbsp; **(**
&nbsp;&nbsp;&nbsp; **)**
&nbsp;&nbsp;&nbsp; **|**
&nbsp;&nbsp;&nbsp; **<**
&nbsp;&nbsp;&nbsp; **>**
&nbsp;&nbsp;&nbsp; **newline**
&nbsp;&nbsp;&nbsp; **space**
&nbsp;&nbsp;&nbsp; **tab**
&nbsp;&nbsp;&nbsp; **newline**

## Control operators

**;**
&nbsp;&nbsp;&nbsp; **&**
&nbsp;&nbsp;&nbsp; **&&**
&nbsp;&nbsp;&nbsp; **||**
&nbsp;&nbsp;&nbsp; **newline**

## Commands

### Builtin

- **for** _name_ [**in** _word_ ...] **do** _list_ **done**
- **case** _word_ **in** [_pattern_ [ | _pattern_ ] ... ) _list_ ;;] ... **esac**
- **if** _list_ **then** _list_ [**elif** _list_ **then** _list_] ... [**else** _list_] **fi**
- **while** _list_ [**do** _list_] **done**
- **(** _list_ **)**
- **{** _list_ **}**

### Special

- **:**
- **.** _file_
- **break** [_n_]
- **continue** [_n_]
- **cd** [_arg_]
- **eval** [_arg_ ...]
- **exec** [_arg_ ...]
- **exit** [_n_]
- **export** [_name_ ...]
- **login** [_arg_ ...]
- **newgrp** [_arg_ ...]
- **read** _name_ ...
- **readonly** [_name_ ...]
- **set** [**-eknptuvx** [arg ...]]
- **shift**
- **times**
- **trap** [_arg_] [_n_] ...
- **umask** [ _nnn_ ]
- **wait** [_n_]

## Parameters

- ${_parameter_} sequence of letters,	digits or  under-
    scores  (a name), a digit, or	any of the characters **\*** **@** **#** **?** **-** **$\*\* **!**
- ${_parameter_-_word_}
- ${_parameter_=_word_}
- ${_parameter_?_word_}
- ${_parameter_+_word_}

## Variables

- Automatically set: **#**, **-**, **?**, **$**, **!**
- Used but not set: **HOME**, **PATH**, **MAIL**, **PS1**, **PS2**, **IFS**

## Sources

- [Origins of the Bourne shell](https://www.in-ulm.de/~mascheck/bourne/index.html#origins)
- [FR] [LinuxFR: Petite histoire du bourne shell](https://linuxfr.org/news/petite-histoire-du-bourne-shell)
- [Official Manual](https://www.in-ulm.de/~mascheck/bourne/v7/)
- [Forked source code](https://github.com/rmonin/unix/tree/Research-V7/usr/src/cmd/sh)
- [Source code archive](https://www.tuhs.org/cgi-bin/utree.pl?file=V7/usr/src/cmd/sh)
