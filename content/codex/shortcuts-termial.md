---
title: Terminal Shortcuts
date: 2024-10-29
lastmod: 2024-10-30
tags:
  - cli
  - tips
category: Digital Toolkit
toc: false
draft: false
---

# Terminal Shortcuts Cheat Sheet

## Navigation and Editing
| Keys     | macOS[^1] | Description                                      |
|----------|-----------|--------------------------------------------------|
| `Ctrl+A` | `⌃+A`     | Move cursor to the beginning of the line         |
| `Ctrl+E` | `⌃+E`     | Move cursor to the end of the line               |
| `Ctrl+B` | `⌃+B`     | Move cursor back one character                   |
| `Ctrl+F` | `⌃+F`     | Move cursor forward one character                |
| `Alt+B`  | `⌥+B`     | Move cursor back one word                        |
| `Alt+F`  | `⌥+F`     | Move cursor forward one word                     |
| `Ctrl+U` | `⌃+U`     | Delete from cursor to beginning of line          |
| `Ctrl+K` | `⌃+K`     | Delete from cursor to end of line                |
| `Ctrl+W` | `⌃+W`     | Delete the word before the cursor                |
| `Ctrl+D` | `⌃+D`     | Delete the character at the cursor               |
| `Alt+D`  | `⌥+D`     | Delete the word after the cursor                 |
| `Ctrl+T` | `⌃+T`     | Transpose (swap) the two characters before cursor|
| `Ctrl+Y` | `⌃+Y`     | Paste the last deleted text (yank)               |
| `Ctrl+L` | `⌃+L`     | Clear the screen (like `clear` command)          |
| `Ctrl+_` | `⌃+_`     | Undo the last editing command                    |

## History and Search
| Keys     | macOS[^1] | Description                                      |
|----------|-----------|--------------------------------------------------|
| `Ctrl+R` | `⌃+R`     | Reverse search through command history           |
| `Ctrl+S` | `⌃+S`     | Forward search through command history (may be disabled) |
| `Ctrl+G` | `⌃+G`     | Exit history search mode                         |
| `Ctrl+P` | `⌃+P`     | Previous command in history                      |
| `Ctrl+N` | `⌃+N`     | Next command in history                          |
| `Up`     | `Up`      | Previous command in history                      |
| `Down`   | `Down`    | Next command in history                          |
| `!!`     | `!!`      | Repeat the last command                          |
| `!cmd`   | `!cmd`    | Repeat last command starting with *cmd*          |

## Process Control
| Keys     | macOS[^1] | Description                                      |
|----------|-----------|--------------------------------------------------|
| `Ctrl+C` | `⌃+C`     | Interrupt (kill) the current process             |
| `Ctrl+Z` | `⌃+Z`     | Suspend the current process                      |
| `Ctrl+D` | `⌃+D`     | End of input (logout or exit if prompt is empty) |
| `Ctrl+Q` | `⌃+Q`     | Resume terminal output if stopped                |
| `Ctrl+S` | `⌃+S`     | Stop terminal output (freeze)                    |
| `Ctrl+\` | `⌃+\`     | Quit and dump core (force quit)                  |

## Copy and Paste (Terminal Emulator Specific)
| Keys           | macOS[^1] | Description                                      |
|----------------|-----------|--------------------------------------------------|
| `Ctrl+Shift+C` | `⌘+C`     | Copy selected text                               |
| `Ctrl+Shift+V` | `⌘+V`     | Paste clipboard text                             |
| `Shift+Insert` | `⌘+V`     | Paste clipboard text (alternative)               |
| `Shift+Ctrl+T` | `⌘+T`     | Open a new tab (in supported terminal emulators) |
| `Shift+Ctrl+W` | `⌘+W`     | Close current tab (in supported terminal emulators) |

[^1]: **⌘** Command, **⌃** Control, **⌥** Option, **⇧** Shift
