---
title: CLI Toolbox

date: 2024-03-05
lastmod: 2024-03-05
description: "General-purpose aliases and helpers for daily terminal usage."
tags:
  - cli
  - tips
category: Digital Toolkit
toc: true
draft: false
---

# CLI Toolbox
Useful aliases and small helpers I frequently use in the terminal.  
Program-specific cheatsheets live on their own pages (tmux, vim, git…).

---

## Aliases

### File & Directory Operations

#### ls-related aliases
```bash
alias ls='ls --color=auto'                       # Enable colorized output
alias ls='ls --color=auto 2>/dev/null || ls -G'  # Portable colorized ls (GNU/Linux & macOS) alternative
alias ll='ls -lh'                                # Long format + human-readable sizes
alias la='ls -lAh'                               # Long format + include hidden files
alias lr='ls -lrh'                               # Long format, reverse order
alias lra='ls -lrAh'                             # Long format, reverse order, include hidden files
alias ldot='ls -ldh .*'                          # List only hidden files/folders
```

#### File manipulation aliases
```bash
alias cp='cp -iv'  # Copy interactively + verbose
alias mv='mv -iv'  # Move interactively + verbose
alias rm='rm -iv'  # Remove interactively + verbose
```
> Tip: Always use interactive flags `-i` to prevent accidental overwrites or deletions.

#### Search & Filtering

```bash
alias grep='grep --color=auto --exclude-dir={.bzr,CVS,.git,.hg,.svn,.idea,.tox,.venv,venv}'
```
> Skip common dirs to keeps search results clean.

---

#### List of commands you use most often
history |  awk '{a[$2]++}END{for(i in a){print a[i] " " i}}' |  sort -rn |  head

quickly rename a file
$ mv filename.{old,new}

Display the top ten running processes - sorted by memory usage
$ ps aux |  sort -nk +4 |  tail

Delete all files in a folder that don't match a certain file extension
$ rm !(*.foo|*.bar|*.baz)

Create a script of the last executed command
$ echo "!!" > foo.sh

Easy and fast access to often executed commands that are very long and complex.
$ some_very_long_and_complex_command # label
> with ctrl + R find easily the label

escape any command aliases
$ \[command]

Show apps that use internet connection at the moment. (Multi-Language)
$ lsof -P -i -n

diff two unsorted files without creating temporary files
$ diff <(sort file1) <(sort file2)

Reuse all parameter of the previous command line
$ !*

Show File System Hierarchy
$ man hier

Add Password Protection to a file your editing in vim.
$ vim -x <FILENAME>

Remove duplicate entries in a file without sorting.
$ awk '!x[$0]++' <file>

Find Duplicate Files (based on size first, then MD5 hash)
$ find -not -empty -type f -printf "%s
" |  sort -rn |  uniq -d |  xargs -I{} -n1  find -type f -size {}c -print0 |  xargs -0  md5sum |  sort |  uniq -w32 --all-repeated=separate

Insert the last command without the last argument (bash)
$ !:-

replace spaces in filenames with underscores
$ rename 'y/ /_/' *

Google Translate
$ translate(){  wget -qO- "http://ajax.googleapis.com/ajax/services/language/translate?v=1.0&q=$1&langpair=$2|${3:-en}" |  sed 's/.*"translatedText":"\([^"]*\)".*}/\1
/'; }

Inserts the results of an autocompletion in the command line
$ ESC *


Rapidly invoke an editor to write a long, complex, or tricky command
$ fc

Copy a file using pv and watch its progress
$ pv sourcefile > destfile

mkdir & cd into it as single command
$ mkdir /home/foo/doc/bar &&  cd $_

Create a pdf version of a manpage
$ man -t  manpage |  ps2pdf - filename.pdf

Remove all but one specific file
$ rm -f !(survivior.txt)

git remove files which have been deleted
$ git add -u
copy

Edit a file on a remote host using vim
$ vim scp://username@host//path/to/somefile

Graph # of connections for each hosts.
$ netstat -an |  grep ESTABLISHED |  awk '{ print $5}' |  awk -F: '{ print $1}' |  sort |  uniq -c |  awk '{  printf("%s\t%s\t",$2,$1) ;  for (i = 0; i < $1; i++) { printf("*")};  print "" }'

Monitor progress of a command
$ pv access.log |  gzip > access.log.gz

Search for a <pattern> string inside all files in the current directory
$ grep -RnisI <pattern> *

Get the 10 biggest files/folders for the current direcotry
$ du -s * |  sort -n |  tail

Recursively remove all empty directories
$ find . -type d -empty -delete

Nice weather forecast on your shell
$ curl wttr.in/seville

Simulate PC activity
alias cafe='cat /dev/urandom | hexdump -C | grep "ca fe"'

Makes the permissions of file2 the same as file1
$ chmod --reference file1 file2

Remove security limitations from PDF documents using ghostscript
$ gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=OUTPUT.pdf -c .setpdfwrite -f INPUT.pdf

(Debian/Ubuntu) Discover what package a file belongs to
$ dpkg -S /usr/bin/ls

To print a specific line from a file
$ sed -n 5p <file>

Open Finder from the current Terminal location
$ open .

Create a persistent connection to a machine
$ ssh -MNf <user>@<host>

Run a command only when load average is below a certain threshold
$ # To be defined

Create a quick back-up copy of a file
$ cp file.txt{,.bak}

Start COMMAND, and kill it if still running after 5 seconds
$ timeout 5s COMMAND

Attach screen over ssh
ssh -t remote_host tmux attach || tmux new
alias ssh_tmux='ssh -t remote_host tmux attach || tmux new'  # alias version


Remove all files previously extracted from a tar(.gz) file.
$ tar -tf <file. tar.gz> |  xargs  rm -r


directly ssh to host B that is only accessible through host A
$ ssh -t hostA  ssh hostB

which program is this port belongs to ?
$ lsof -i tcp:80

What is my public IP-address?
$ curl ifconfig.me

Retry the previous command until it exits successfully
$ until !!; do :; done


List only the directories
$ ls -d */

Google text-to-speech in mp3 format
$ wget -q -U Mozilla -O output.mp3 "http://translate.google.com/translate_tts?ie=UTF-8&tl=en&q=hello+world

Download all images from a site
$ wget -r -l1 --no-parent -nH -nd -P/tmp -A".gif,.jpg" http://example.com/images

Download Youtube video with wget!
$ wget http://www.youtube.com/watch?v=dQw4w9WgXcQ -qO- |  sed -n "/fmt_url_map/{s/[\'\"\|]/
/g;p}" |  sed -n '/^fmt_url_map/,/videoplayback/p' |  sed -e :a -e '$q;N;5,$D;ba' |  tr -d '
' |  sed -e 's/\(.*\),\(.\)\{1,3\}/\1/' |  wget -i - -O surprise.flv

Compare two directory trees.
$ diff <(cd dir1 &&  find | sort) <(cd dir2 &&  find | sort)

make directory tree
$ mkdir -p work/{d1,d2}/{src,bin,bak}

Show apps that use internet connection at the moment.
$ lsof -P -i -n |  cut -f 1 -d " "|  uniq |  tail -n +2

Recursively change permissions on files, leave directories alone.
$ find ./ -type f -exec  chmod 644 {} \;

Find files that have been modified on your system in the past 60 minutes
$ sudo  find / -mmin 60 -type f

using `!#$' to referance backward-word
$ cp /work/host/phone/ui/main. cpp !#$:s/host/target

Search recursively to find a word or phrase in certain file types, such as C code
$ find . -name "*.[ch]" -exec  grep -i -H "search pharse" {} \;

Block known dirty hosts from reaching your machine
$ wget -qO - http://infiltrated.net/blacklisted|awk '!/#|[a-z]/&&/./{print "iptables -A INPUT -s "$1" -j DROP"}'

find files in a date range
$ find . -type f -newermt "2010-01-01" ! -newermt "2010-06-01"

Remove a line in a text file. Useful to fix "ssh host key change" warnings
$ sed -i 8d ~/.ssh/known_hosts

Save a file you edited in vim without the needed permissions (no echo)
$ :w !sudo  tee > /dev/null %

Remove blank lines from a file using grep and save output to new file
$ grep . filename > newfilename

delete a line from your shell history
$ history -d

Random Number Between 1 And X
$ echo $[RANDOM%X+1]

find all file larger than 500M
$ find / -type f -size +500M

Save your sessions in vim to resume later
$ :mksession! <filename>

Tell local Debian machine to install packages used by remote Debian machine
$ ssh remotehost ' dpkg --get-selections' |  dpkg --set-selections && dselect  install

intersection between two files
$ grep -Fx -f file1 file2

prints line numbers
$ nl

Diff on two variables
$ diff <(echo "$a") <(echo "$b")

Pipe stdout and stderr, etc., to separate commands
$ some_command > >(/bin/cmd_for_stdout) 2> >(/bin/cmd_for_stderr)

Use lynx to run repeating website actions
$ lynx -accept_all_cookies -cmd_script=/your/keystroke-file

runs a bash script in debugging mode
$ bash -x ./post_to_commandlinefu.sh

prevent accidents while using wildcards
$ rm *.txt <TAB> <TAB>

Opens vi/vim at pattern in file
$ vi +/pattern [file]

https://www.commandlinefu.com/commands/browse/sort-by-votes

---
## Tools

### `find`

#### Find a single file by name

```sh
find / -name "foo.txt" 2>/dev/null
```

`2>/dev/null` silence permission errors

#### Find a single file by approximate name

```sh
find / -iname "*foo*txt" 2>/dev/null
```

#### Find everything

```shell
find ~/Documents -ls
```

#### Find by content

```shell
find ~/Documents/ -name "*txt" -exec grep -Hi penguin {} \;
```

#### Find files by type

```shell
find ~ -type f
find ~ -type f,l -name "notebook*"
```

#### List just directories, limit depth

```shell
find ~/Public/ -type d
find ~/Public/ -maxdepth 1 -type d
```

#### Find empty files

```shell
find ~ -type f -empty
```

#### Find files by age

```shell
find /var/log -iname "*~" -o -iname "*log*" -mtime +30
find /var/log -iname "*~" -o -iname "*log*" -mtime -7
find /var/log -iname "*~" -o -iname "*log*" -mtime -7 -ls
```

The `+` before the `-mtime` number doesn't mean to add that number to the time. It's a conditional statement that matches (in this example) a value *greater than* 24 times 30. In other words, the sample code finds log files that haven't been modified in a month or more.

To find log files modified within the past week, you can use the `-` conditional.

You can combine `-ls` with these commands for clarity.

#### Search a path

```shell
find / -type d -name 'img' -ipath "*public_html/example*" 2>/dev/null
```

#### Find multiple files

```shell
find /home -type f -name file.txt -exec {} \;
```

#### Find large files

```shell
find / -type f -size +500000k -exec ls -lh {} \;
```

#### Find specific file types

```shell
find / -type f \( -name "*.sh" -o -name "*.txt" )
```

#### Find modified files

```shell
find / -type f -ctime +50 > files.txt
# find / -type f -ctime +50 -exec rm -f {} \;
```

### git

####  Update all Git repositories on a directory

```shell
for i in */.git; do cd $(dirname $i); git pull; cd ..; done
```

### watch

```sh
watch -n 5 -d '/bin/free -m'
```

`-d` highlight diff between current and previous refresh !

## Misc.

### Webserver

#### Display the top 10 IP addresses hitting a webserver

```shell
cat /var/log/nginx/access.log | cut -f 1 -d ' ' | sort | \
uniq -c | sort -hr | head -n 10
```

## Sources

- https://www.redhat.com/sysadmin/linux-find-command
- https://www.redhat.com/sysadmin/one-line-linux-commands
- https://www.redhat.com/sysadmin/find-best-friend
- https://www.commandlinefu.com/commands/browse/sort-by-votes
- https://linuxcommandlibrary.com/basic/oneliners#1429
