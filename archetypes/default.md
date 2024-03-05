---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
description: A brief description of my document.
date: "{{ .Date }}"
lastmod: "{{ .Date }}"
# params:
#   author: '{{ .Site.Params.Author }}'
tags: [markdown, metadata, example]
category: Documentation # not the taxonomoy term, a custom meta
version: 0.1.0
#license: CC BY-SA 4.0
# weight: 1
draft: true
---

# Example Markdown Document

This is an example Markdown document demonstrating various syntax elements.

## Headers

### H3 Header

#### H4 Header

##### H5 Header

###### H6 Header

## Emphasis

**Bold text** or **bold text**.

_Italic text_ or _italic text_.

## Lists

### Unordered List

- Item 1
- Item 2
  - Subitem A
  - Subitem B

### Ordered List

1. First item
2. Second item
   1. Subitem i
   2. Subitem ii

## Links

[OpenAI](https://example.com) - Example link.

## Images

![Example Image](http://placekitten.com/300/200)

## Blockquotes

> This is a blockquote.
>
> - John Doe

## Code Blocks

```python
def hello_world():
    print("Hello, world!")
```

## Tables

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

## Horizontal Rule

---

## Footnotes

Here is a footnote reference[^1].

[^1]: This is a footnote.

## Task Lists

- [x] Task 1
- [ ] Task 2
- [ ] Task 3

## Math Equations

$$
f(x) = \frac{1}{x}
$$

## Strikethrough

~~Strikethrough text.~~

## Inline HTML

<dl>
  <dt>Definition List</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

## Comments

<!-- This is a comment -->

## Syntax Highlighting

```bash
echo "Hello, world!"
```

## Abbreviations

HTML stands for Hyper Text Markup Language.

\*[HTML]: Hyper Text Markup Language
