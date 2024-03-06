---
title: Cmd tips
date: 2024-03-05
lastmod: 2024-03-05
description: 
tags:
  - terminal
  - shell
  - cli
category:
#category: Command Line
toc: true
draft: false
---

## find

### Find a single file by name

```sh
find / -name "foo.txt" 2>/dev/null
```

> `2>/dev/null` silence permission errors

### Find a single file by approximate name

```sh
find / -iname "*foo*txt" 2>/dev/null
```

### Find everything

```shell
find ~/Documents -ls
```

### Find by content

```shell
find ~/Documents/ -name "*txt" -exec grep -Hi penguin {} \;
```

### Find files by type

```shell
find ~ -type f
find ~ -type f,l -name "notebook*"
```

### List just directories, limit depth

```shell
find ~/Public/ -type d
find ~/Public/ -maxdepth 1 -type d
```

### Find empty files

```shell
find ~ -type f -empty
```

### Find files by age

```shell
find /var/log -iname "*~" -o -iname "*log*" -mtime +30
find /var/log -iname "*~" -o -iname "*log*" -mtime -7
find /var/log -iname "*~" -o -iname "*log*" -mtime -7 -ls
```

The `+` before the `-mtime` number doesn't mean to add that number to the time. It's a conditional statement that matches (in this example) a value *greater than* 24 times 30. In other words, the sample code finds log files that haven't been modified in a month or more.

To find log files modified within the past week, you can use the `-` conditional.

You can combine `-ls` with these commands for clarity.

### Search a path

```shell
find / -type d -name 'img' -ipath "*public_html/example*" 2>/dev/null
```

### Find multiple files

```shell
find /home -type f -name file.txt -exec {} \;
```

### Find large files

```shell
find / -type f -size +500000k -exec ls -lh {} \;
```

### Find specific file types

```shell
find / -type f \( -name "*.sh" -o -name "*.txt" )
```

### Find modified files

```shell
find / -type f -ctime +50 > files.txt
# find / -type f -ctime +50 -exec rm -f {} \;
```

## git

###  Update all Git repositories on a directory

```shell
for i in */.git; do cd $(dirname $i); git pull; cd ..; done
```

## watch

```sh
watch -n 5 -d '/bin/free -m'
```
> `-d` highlight diff between current and previous refresh !

## Misc.

### Display the top 10 IP addresses hitting a webserver

```shell
cat /var/log/nginx/access.log | cut -f 1 -d ' ' | sort | \
uniq -c | sort -hr | head -n 10
```

## Sources

- https://www.redhat.com/sysadmin/linux-find-command
- https://www.redhat.com/sysadmin/one-line-linux-commands
- https://www.redhat.com/sysadmin/find-best-friend
