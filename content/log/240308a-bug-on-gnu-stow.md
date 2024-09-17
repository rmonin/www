---
title: Bug on GNU Stow 1/3
date: 2024-03-08
lastmod: 2024-03-08
description: Identify and troubleshoot bugs in GNU Stow.
tags:
  - stow
  - bug
  - fix
draft: false
---

# Bug on GNU Stow

Today I discovered a bug on stow. Here is a detail of my research around all this topic

## which bug ?

to make it simple, `--dotfiles` seems not working correctly in addition to some parameters such as `--dir` and/or `--target` + dirs using `dot-` prefix in replacement of period

## Steps

### Check man

My first step is to check if my usage of parameters is correct.

```
$ man stow | grep dotfiles -A 10
       --dotfiles
           Enable special handling for "dotfiles" (files or folders whose name
           begins with a period) in the package directory. If this option is
           enabled, Stow will add a preprocessing step for each file or folder
           whose name begins with "dot-", and replace the "dot-" prefix in the
           name by a period (.). This is useful when Stow is used to manage
           collections of dotfiles, to avoid having a package directory full
           of hidden files.

           For example, suppose we have a package containing two files,
           stow/dot-bashrc and stow/dot-emacs.d/init.el. With this option,
           Stow will create symlinks from .bashrc to stow/dot-bashrc and from
           .emacs.d/init.el to stow/dot-emacs.d/init.el. Any other files,
           whose name does not begin with "dot-", will be processed as usual.

       -V
       --version
```

### See official online documentation

I looked for official [Known-Bugs](https://www.gnu.org/software/stow/manual/html_node/Known-Bugs.html#Known-Bugs) section. There is officially no bug identified on documentation for 2.3.1. My current version is up to date :

```
$ stow --verions
stow (GNU Stow) version 2.3.1
```

The documentation invite me to [Reporting Bugs](https://www.gnu.org/software/stow/manual/html_node/Reporting-Bugs.html#Reporting-Bugs). by sending email to maintainers.

Before doing this I wanted to check if it's not already reported and not mentioned on official doc in order to not bother maintainers and avoid spam notification

### Report investigation

Found some links:
 - [git repo](https://git.savannah.gnu.org/git/stow.git)

- https://lists.gnu.org/mailman/listinfo/bug-stow
- https://savannah.gnu.org/bugs/?group=stow
- [mirror repo](https://github.com/aspiers/stow)
- [main issue](https://github.com/aspiers/stow/issues/33) talking about exact same trouble

### Check source code

Just by curiosity i checked on sources

```
$ mkdir ~/Devel/GNU && cd $_
$ git clone https://git.savannah.gnu.org/git/stow.git/
$ cd stow
$ grep -rl "dot" .
./bin/stow.in
./MANIFEST
./t/dotfiles.t
./README.md
./NEWS
./lib/Stow.pm.in
./lib/Stow/Util.pm.in
./doc/texinfo.tex
./doc/stow.texi
./aclocal.m4
```

```
$ grep "dot" NEWS -B 5 -A 5

* Changes in version 2.3.0

*** New features / changes in behaviour

***** New --dotfiles option


      Enable special handling for "dotfiles" (files or folders whose name
      begins with a period) in the package directory. If this option is
      enabled, Stow will add a preprocessing step for each file or folder
      whose name begins with "dot-", and replace the "dot-" prefix in the
      name by a period (".").  This is useful when Stow is used to manage
      collections of dotfiles, to avoid having a package directory full
      of hidden files.

      For example, suppose we have a package containing two files,
      stow/dot-bashrc and stow/dot-emacs.d/init.el.  With this option,
      Stow will create symlinks from .bashrc to stow/dot-bashrc and from
      .emacs.d/init.el to stow/dot-emacs.d/init.el.  Any other files,
      whose name does not begin with "dot-", will be processed as usual.

      Thanks to Joris Vankerschaver for this feature!

***** Shell-like expansion in .stowrc files

--
      to de-emphasise the package management use, since these days almost
      everyone prefers to use modern package managers such as rpm / dpkg
      / Nix for (system-wide) package management.

      To compensate, more popular modern use cases for Stow have been
      added, such as management of dotfiles and software compiled in the
      user's $HOME directory.

***** Miscellaneous documentation fixes

      - Various typos were fixed.
```

```
$ grep "dot" ./t/dotfiles.t -B 5 -A 5
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see https://www.gnu.org/licenses/.

#
# Test case for dotfiles special processing
#


use strict;
use warnings;

--
cd("$TEST_DIR/target");

my $stow;

#
# process a dotfile marked with 'dot' prefix
#

$stow = new_Stow(dir => '../stow', dotfiles => 1);

make_path('../stow/dotfiles');
make_file('../stow/dotfiles/dot-foo');

$stow->plan_stow('dotfiles');
$stow->process_tasks();
is(
    readlink('.foo'),
    '../stow/dotfiles/dot-foo',
    => 'processed dotfile'
);

#
# ensure that turning off dotfile processing links files as usual
#

$stow = new_Stow(dir => '../stow', dotfiles => 0);

make_path('../stow/dotfiles');
make_file('../stow/dotfiles/dot-foo');

$stow->plan_stow('dotfiles');
$stow->process_tasks();
is(
    readlink('dot-foo'),
    '../stow/dotfiles/dot-foo',
    => 'unprocessed dotfile'
);


#
# process folder marked with 'dot' prefix
#

$stow = new_Stow(dir => '../stow', dotfiles => 1);

make_path('../stow/dotfiles/dot-emacs');
make_file('../stow/dotfiles/dot-emacs/init.el');

$stow->plan_stow('dotfiles');
$stow->process_tasks();
is(
    readlink('.emacs'),
    '../stow/dotfiles/dot-emacs',
    => 'processed dotfile folder'
);

#
# corner case: paths that have a part in them that's just "$DOT_PREFIX" or
# "$DOT_PREFIX." should not have that part expanded.
#

$stow = new_Stow(dir => '../stow', dotfiles => 1);

make_path('../stow/dotfiles');
make_file('../stow/dotfiles/dot-');

make_path('../stow/dotfiles/dot-.');
make_file('../stow/dotfiles/dot-./foo');

$stow->plan_stow('dotfiles');
$stow->process_tasks();
is(
    readlink('dot-'),
    '../stow/dotfiles/dot-',
    => 'processed dotfile'
);
is(
    readlink('dot-.'),
    '../stow/dotfiles/dot-.',
    => 'unprocessed dotfile'
);

#
# simple unstow scenario
#

$stow = new_Stow(dir => '../stow', dotfiles => 1);

make_path('../stow/dotfiles');
make_file('../stow/dotfiles/dot-bar');
make_link('.bar', '../stow/dotfiles/dot-bar');

$stow->plan_unstow('dotfiles');
$stow->process_tasks();
ok(
    $stow->get_conflict_count == 0 &&
    -f '../stow/dotfiles/dot-bar' && ! -e '.bar'
    => 'unstow a simple dotfile'
);
```

It seems --dotfiles was added on `2.3.0` and test files are only testing without other parameters combined with `--dotfiles`

## PR was done but closed

https://github.com/aspiers/stow/pull/63

## Next ?

So much questions in my mind

- Why is there no bug identified on official doc ?
- Why issues from mirror repo are not reported on official repo
- Why this bug issued until 2019 and not yet fixed (maybe the is a good reason or lack of maintainer available)
- Why people are so rude ([1](https://github.com/aspiers/stow/issues/33#issuecomment-1804889524), [2](https://github.com/aspiers/stow/issues/33#issuecomment-1902276202), and more...) in comments against [volunteers](https://github.com/aspiers/stow/issues/33#issuecomment-1431786737) and do not use this energy on positive matter
- May I check how to fix and submit
- Is there already a fix not yet packaged ?
