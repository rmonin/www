---
title: I hate the streamlining UX of Settings Panel
date: 2024-03-26
lastmod: 2024-03-26
description:
tags:
  - streamlining
  - settings
  - productivity
  - ux
toc: false
draft: false
---

# Streamlining UX of Settings Panel sucks !

I like the idea behind streamlining UX, to simplify the interface to cater to the mass usage. BUT for the rare advanced needs, don't make these options disappear... Just because they are rarely used doesn't mean they should vanish 😭

Here are some recent examples

## Gnome Files

![nautilus sidebar](/files/gnome-nautilus/sidebar.png)

I want to modify the sidebar. I don't need to display recent files, favorites, videos, etc.

The essential shortcuts for me are:

- Home
- Devel
- Documents
- Download
- Eventually Some drives

I don't care about having a Videos tab; I don't use it! And it's impossible to find out how to set this up in the preferences, nor in [Gnome Tweaks](https://wiki.gnome.org/action/show/Apps/Tweaks). There's a trick with `~/.config/user-dirs.dirs` and `~/.config/user-dirs.conf`, but that doesn't suit me either... I don't want to change the behavior of my XDG dirs; I just want to avoid displaying them in this sidebar because I rarely go there. And even if I wanted to use this solution, why is it so complicated? 😮 So, is it no longer possible to _right-click > remove the shortcut_? or to have a list of items to check in the settings?

## Gnome screenshot

With this tool, it seems that I can't change the default destination folder for images. I'm used to having everything automatically go to `~/Download`; it serves as my INBOX for everything, and if I need to clean up, I know I can safely delete this folder since if a file is useful, it will have been moved elsewhere beforehand. I don't want to have a `~/Images/Screenshots` directory specifically for this.

No, honestly, extreme UX tends to remove useful features instead of just moving them to a more discreet and less visited section.
