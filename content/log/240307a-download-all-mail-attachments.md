---
title: Download all mail attachments
date: 2024-03-07
lastmod: 2024-03-07
description:
tags:
  - mutt
  - efficiency
  - til
draft: false
---

# Download all mail attachments

## Install mutt

```shell
brew install mutt
sudo chgrp mail /opt/homebrew/Cellar/mutt/2.2.12/bin/mutt_dotlock
sudo chmod g+s /opt/homebrew/Cellar/mutt/2.2.12/bin/mutt_dotlock
mkdir -p ~/.config/mutt
touch ~/.config/mutt/muttrc
sudo touch /var/mail/rmm
chown rmm /var/mail/rmm
```

## Configuration

```shell
set from = "username@example.com"
set realname = "First Last"

# IMAP settings
set imap_user = "username@example.com"
set imap_pass = "<mailbox password>"

# Remote folders
set folder = imaps://mail.gandi.net
```

## Sources

- https://www.makeuseof.com/install-configure-mutt-with-gmail-on-linux/
