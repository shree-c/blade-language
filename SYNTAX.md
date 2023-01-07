- The whole blade language is a set of tags and their styling information.
- The styles given to tags will propogate to their children but have less specificity than the style given to their children

- Syntax:

- Reserved symbols
  - global
    - {, }, (, ), [, ]
    - : inside []

```
tagname [
  tag styling info + attributes
]{
  contents of the tag
  nested tag [
    styling info
  ] {
    contents
  }
}
```

- Styling and attributes
  - key value pairs delimited by semi colon
  - Want to combine styling information and attributes
  - Some elements will have default styles

```
(p) [
  color: red;
  align: center;
  margin: 10px;
] {
  This is paragraph (em) { emphasized text }
}
```


## main block

- can contain a nested block
- starts with { and ends with }
- if not nested contains block content
  - can be empty or bunch of words
