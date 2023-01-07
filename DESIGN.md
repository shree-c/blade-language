# document elements supported

- paragraphs
- headings of diffenent level
- text decorations: emphasis, italicization, underline, strike-through
- image embeddings
- position
- minor css effects
- colors
- font sizes
- lists

# syntax


# notes

- Reducing the hassle of writing css.
- Markdown exists, but it only dose bare minimum.
- This should help people write a webpage as quickly as possible which is decent looking and with no knowledge of css.
- I want to make it white space sensitive to avoid typing
- The primary goal is to convert it to html. I don't want to think about other file formats
- If I can convert the whole document into some form of nested object it would be cool
- I should decide whether should I allow nesting of elements
  - I need nesting for lists
  - I should selectively allow nesting for certain elements
- I will also selectively allow only certain css styles and provide a different syntax to use them
- I want to allow grouping elements under an element and provide the whole styling
- If I decide to make syntax space there comes a problem with using inline elememts inside a body another element. It becomes ugly to use \n as a delimitor and spcae cannot be used as delimitor because
  - I feel like it would be easier to parse non case sensitive syntax
