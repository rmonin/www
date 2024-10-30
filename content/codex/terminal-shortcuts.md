---
title: Terminal Shortcuts
date: 2024-10-29
lastmod: 2024-10-30
tags:
  - cli
  - tips
category: CLI Tools
toc: false
draft: false
---

# Terminal Shortcuts Cheat Sheet

## Navigation and Editing
| Shortcut | macOS | Description                                      |
|----------|-------|--------------------------------------------------|
| `Ctrl+A` | `⌃+A` | Move cursor to the beginning of the line         |
| `Ctrl+E` | `⌃+E` | Move cursor to the end of the line               |
| `Ctrl+B` | `⌃+B` | Move cursor back one character                   |
| `Ctrl+F` | `⌃+F` | Move cursor forward one character                |
| `Alt+B`  | `⌥+B` | Move cursor back one word                        |
| `Alt+F`  | `⌥+F` | Move cursor forward one word                     |
| `Ctrl+U` | `⌃+U` | Delete from cursor to beginning of line          |
| `Ctrl+K` | `⌃+K` | Delete from cursor to end of line                |
| `Ctrl+W` | `⌃+W` | Delete the word before the cursor                |
| `Ctrl+D` | `⌃+D` | Delete the character at the cursor               |
| `Alt+D`  | `⌥+D` | Delete the word after the cursor                 |
| `Ctrl+T` | `⌃+T` | Transpose (swap) the two characters before cursor|
| `Ctrl+Y` | `⌃+Y` | Paste the last deleted text (yank)               |
| `Ctrl+L` | `⌃+L` | Clear the screen (like `clear` command)          |
| `Ctrl+_` | `⌃+_` | Undo the last editing command                    |

## History and Search
| Shortcut     | macOS        | Description                                      |
|--------------|--------------|--------------------------------------------------|
| `Ctrl+R`     | `⌃+R`        | Reverse search through command history           |
| `Ctrl+S`     | `⌃+S`        | Forward search through command history (may be disabled) |
| `Ctrl+G`     | `⌃+G`        | Exit history search mode                         |
| `Ctrl+P`     | `⌃+P`        | Previous command in history                      |
| `Ctrl+N`     | `⌃+N`        | Next command in history                          |
| `Up Arrow`   | `Up Arrow`   | Previous command in history                      |
| `Down Arrow` | `Down Arrow` | Next command in history                          |
| `!!`         | `!!`         | Repeat the last command                          |
| `!command`   | `!command`   | Repeat last command starting with *command*      |

## Process Control
| Shortcut | macOS | Description                                      |
|----------|-------|--------------------------------------------------|
| `Ctrl+C` | `⌃+C` | Interrupt (kill) the current process             |
| `Ctrl+Z` | `⌃+Z` | Suspend the current process                      |
| `Ctrl+D` | `⌃+D` | End of input (logout or exit if prompt is empty) |
| `Ctrl+Q` | `⌃+Q` | Resume terminal output if stopped                |
| `Ctrl+S` | `⌃+S` | Stop terminal output (freeze)                    |
| `Ctrl+\` | `⌃+\` | Quit and dump core (force quit)                  |

## Copy and Paste (Terminal Emulator Specific)
| Shortcut       | macOS | Description                                      |
|----------------|-------|--------------------------------------------------|
| `Ctrl+Shift+C` | `⌘+C` | Copy selected text                               |
| `Ctrl+Shift+V` | `⌘+V` | Paste clipboard text                             |
| `Shift+Insert` | `⌘+V` | Paste clipboard text (alternative)               |
| `Shift+Ctrl+T` | `⌘+T` | Open a new tab (in supported terminal emulators) |
| `Shift+Ctrl+W` | `⌘+W` | Close current tab (in supported terminal emulators) |

--- 

**MacOS symbols**
- **⌃** Control,
- **⌘** Command,
- **⇧** Shift,
- **⌥** Option
