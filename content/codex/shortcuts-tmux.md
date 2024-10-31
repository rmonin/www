---
title: Tmux Shortcuts
date: 2024-10-29
lastmod: 2024-10-30
tags:
  - cli
  - tips
category: Digital Toolkit
toc: false
draft: false
---

# Tmux Shortcuts Cheat Sheet

## Basic Commands
| Keys       | Description                 |
|------------|-----------------------------|
| `Ctrl+B`   | Default Tmux prefix         |
| `Ctrl+B "` | Split pane horizontally     |
| `Ctrl+B %` | Split pane vertically       |
| `Ctrl+B D` | Detach from current session |
| `Ctrl+B &` | Kill the current window     |
| `Ctrl+B ~` | Show previous messages from tmux, if any. |
| `Ctrl+B ?` | List all keybindings        |
| `Ctrl+B :` | Open the command prompt     |

## Pane Management
| Keys                | Description                                      |
|---------------------|--------------------------------------------------|
| `Ctrl+B Arrow`      | Move to the pane above/below/left/right          |
| `Ctrl+B Ctrl+Arrow` | Resize the current pane in steps of one cell     |
| `Ctrl+B Alt+Arrow`  | Resize the current pane in steps of five cells   |
| `Ctrl+B Alt+[1-5]`  | Arrange  panes in one of the five preset layouts |
| `Ctrl+B Space`      | Arrange panes in the next preset layout          |
| `Ctrl+B Z`          | Toggle pane zoom (fullscreen)                    |
| `Ctrl+B X`          | Kill the current pane                            |

## Window Management
| Keys           | Description                 |
|----------------|-----------------------------|
| `Ctrl+B C`     | Create a new window         |
| `Ctrl+B ,`     | Rename the current window   |
| `Ctrl+B N`     | Move to the next window     |
| `Ctrl+B P`     | Move to the previous window |
| `Ctrl+B [0-9]` | Switch to window by number  |
| `Ctrl+B '`     | Prompt for a window index to select |
| `Ctrl+B W`     | List windows                |

## Session Management
| Keys                          | Description          |
|-------------------------------|----------------------|
| `tmux new -s <name>`          | Create a new session |
| `tmux attach -t <name>`       | Attach to a session  |
| `tmux kill-session -t <name>` | Kill a session       |

## Copy Mode
| Keys                   | Description              |
|------------------------|--------------------------|
| `Ctrl+B [`             | Enter copy mode          |
| `Space` (in copy mode) | Begin selection          |
| `Enter` (in copy mode) | Copy selection to buffer |
| `Ctrl+B ]`             | Paste buffer             |

## Miscellaneous
| Keys       | Description          |
|------------|----------------------|
| `Ctrl+B T` | Show current time    |
| `Ctrl+B Q` | Display pane numbers |
| `Ctrl+B S` | List sessions        |


## Tmux Commands After `Ctrl+B :`

### Session Management
- `new-session -s <session_name>` : Create a new session with a specific name.
- `attach-session -t <session_name>` : Attach to an existing session by name.
- `detach-session` : Detach from the current session.
- `list-sessions` : List all active sessions.
- `kill-session -t <session_name>` : Terminate a specific session.

### Window Management
- `new-window` : Create a new window.
- `kill-window` : Close the current window.
- `rename-window <new_name>` : Rename the current window.
- `list-windows` : List all windows in the current session.
- `select-window -t <window_number>` : Switch to a specific window by number.

### Copy Mode (and Buffer Management)
- `set-buffer <text>` : Set the contents of the buffer.
- `show-buffer` : Display the contents of the buffer.
- `save-buffer <file>` : Save the buffer contents to a file.
- `load-buffer <file>` : Load contents from a file into the buffer.

### Miscellaneous
- `source-file <file>` : Reload the Tmux configuration from the specified file.
- `source-file ~/.tmux.conf` : Reload the Tmux configuration from the default config file.
- `set -g <option> <value>` : Set a global option.
- `set -s <option> <value>` : Set a session option.
- `set -w <option> <value>` : Set a window option.
