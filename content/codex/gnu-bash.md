---
title: GNU Bash
date: 2024-03-13
lastmod: 2024-03-14
description: All my stuffs around the GNU Bash.
tags:
category: CLI Tools
toc: true
draft: false
---

# GNU Bash


## Overview

Bash is the shell, or command language interpreter, for the gnu operating system. The name is an acronym for the ‘Bourne-Again SHell’, a pun on Stephen Bourne, the author of the direct ancestor of the current Unix shell sh, which appeared in the Seventh Edition Bell Labs Research version of Unix.

All of the Bourne shell builtin commands are available in Bash, The rules for evaluation and quoting are taken from the posix specification for the ‘standard’ Unix shell.

## Commands

### Builtin

- until test-commands; do consequent-commands; done
- select name [in words ...]; do commands; done
- ((...))
- [[...]]

---

- getopts optstring name [arg ...]
- hash [-r] [-p filename] [-dt] [name]
- pwd [-LP]
- return [n]
- test expr
- umask [-p] [-S] [mode]
- unset [-fnv] [name]

---

- alias [-p] [name[=value] ...]
- bind
  - bind [-m keymap] [-lpsvPSVX]
  - bind [-m keymap] [-q function] [-u function] [-r keyseq] bind [-m keymap] -f filename
  - bind [-m keymap] -x keyseq:shell-command
  - bind [-m keymap] keyseq:function-name
  - bind [-m keymap] keyseq:readline-command
  - bind readline-command-line
- builtin [shell-builtin [args]]
- caller [expr]
- command [-pVv] command [arguments ...]
- declare [-aAfFgiIlnrtux] [-p] [name[=value] ...]
- echo [-neE] [arg ...]
- enable [-a] [-dnps] [-f filename] [name ...]
- help [-dms] [pattern]
- let expression [expression ...]
- local [option] name[=value] ...
- logout [n]
- mapfile [-d delim] [-n count] [-O origin] [-s count] [-t] [-u fd] [-C callback] [-c quantum] [array]
- printf [-v var] format [arguments]
- read [-ers] [-a aname] [-d delim] [-i text] [-n nchars]
  [-N nchars] [-p prompt] [-t timeout] [-u fd] [name ...]
- readarray [-d delim] [-n count] [-O origin] [-s count] [-t] [-u fd] [-C callback] [-c quantum] [array]
- source filename
- type [-afptP] [name ...]
- typeset [-afFgrxilnrtux] [-p] [name[=value] ...]
- ulimit
  - ulimit [-HS] -a
  - ulimit [-HS] [-bcdefiklmnpqrstuvxPRT] [limit]
- set
  - set [-abefhkmnptuvxBCEHPT] [-o option-name] [--] [-] [argument ...]
  - set [+abefhkmnptuvxBCEHPT] [+o option-name] [--] [-] [argument ...]
- shopt [-pqsu] [-o] [optname ...]
- dirs [-clpv] [+N | -N]
- popd [-n] [+N | -N]
- pushd [-n] [+N | -N | dir]
- bg [jobspec ...]
- fg [jobspec]
- jobs
  - jobs [-lnprs] [jobspec]
  - jobs -x command [arguments]
- kill
  - kill [-s sigspec] [-n signum] [-sigspec] jobspec or pid
  - kill -l|-L [exit_status]
- wait [-fn] [-p varname] [jobspec or pid ...]
- disown [-ar] [-h] [jobspec ... | pid ... ]
- suspend [-f]
- compgen [option] [word]
- complete
  - complete [-abcdefgjksuv] [-o comp-option] [-DEI] [-A action] [- G globpat]
  - [-W wordlist] [-F function] [-C command] [-X filterpat]
  - [-P prefix] [-S suffix] name [name ...]
  - complete -pr [-DEI] [name ...]
- compopt [-o option] [-DEI] [+o option] [name]
- fc
  - fc [-e ename] [-lnr] [first] [last]
  - fc -s [pat=rep] [command]
- history
  - history [n]
  - history -c
  - history -d offset
  - history -d start-end history [-anrw] [filename] history -ps arg

### Coprocesses

- coproc

## Functions

- function fname [()] compound-command [ redirections ]

### Parameters

- declare -n ref=$1
- 0

## Shell Expansions

- brace expansion
- tilde expansion
- parameter and variable expansion • command substitution
- arithmetic expansion
- word splitting
- filename expansion

## Variables

- CDPATH
- IFS
- MAIL
- MAILPATH
- OPTARG
- OPTIND
- PATH
- PS1
- PS2

---

- \_

BASH
BASHOPTS
BASHPID
BASH_ALIASES
BASH_ARGC
BASH_ARGV
BASH_ARGV0
BASH_CMDS
BASH_CMDS is unset, it loses its special properties, even if it is subsequently reset.
BASH_COMMAND
BASH_COMPAT
BASH_ENV
BASH_EXECUTION_STRING
BASH_LINENO
BASH_LOADABLES_PATH
BASH_REMATCH
BASH_SOURCE
BASH_SUBSHELL
BASH_VERSINFO
BASH_VERSINFO
BASH_VERSINFO
BASH_VERSION
BASH_XTRACEFD
CHILD_MAX
COLUMNS
COMP_CWORD
COMP_LINE
COMP_POINT
COMP_TYPE
COMP_KEY
COMP_WORDBREAKS
COMP_WORDS
COMPREPLY
COPROC
DIRSTACK
EMACS
ENV
WORDBREAKS
EPOCHREALTIME
EPOCHSECONDS
EUID The numeric effective user id of the current user. This variable is readonly. EXECIGNORE
FCEDIT
FIGNORE
FUNCNAME
FUNCNEST
GLOBIGNORE
GROUPS
histchars
HISTCMD
HISTCONTROL
HISTFILE
HISTFILESIZE
HISTIGNORE
HISTSIZE
HISTTIMEFORMAT
HOSTFILE
HOSTNAME
HOSTTYPE
IGNOREEOF
INPUTRC
INSIDE_EMACS
LANG
LC_ALL
LC_COLLATE
LC_CTYPE
LC_MESSAGES
LC_NUMERIC
LC_TIME
LINENO
LINES
MACHTYPE
MAILCHECK
MAPFILE
OLDPWD
OPTERR
OSTYPE
PIPESTATUS
POSIXLY_CORRECT
PPID The process id of the shell’s parent process. This variable is readonly.
PROMPT_COMMAND
PROMPT_DIRTRIM
PWD The current working directory as set by the cd builtin.
RANDOM Each time this parameter is referenced, it expands to a random integer between 0 and 32767. Assigning a value to this variable seeds the random number gener- ator. If RANDOM is unset, it loses its special properties, even if it is subsequently reset.
READLINE_ARGUMENT
READLINE_LINE
READLINE_MARK
READLINE_POINT
REPLY
SECONDS
SHELL
SHELLOPTS
SHLVL
SRANDOM
TIMEFORMAT
TMOUT
TMPDIR If set, Bash uses its value as the name of a directory in which Bash creates temporary files for the shell’s use.
UID The numeric real user id of the current user. This variable is readonly.

## Redirections

## Shell Arithmetic

## Misc.

- `|&` vs `2>&1 |`

## Sources

- [Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.pdf)
- [Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/abs-guide.pdf)
