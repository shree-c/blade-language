start = block

block = delimitor* tag:tag delimitor+ style:style_info delimitor+ body:tag_block delimitor* {
  return {
    tag,
    style,
    body
  }
} / sentence

tag = "("tag_text:tag_name")" {
  return tag_text
}

tag_block = "{" delimitor* body:tag_body delimitor* "}" {
  return body
}

tag_body = block*



























delimitor = " " / "\n"

tag_name = "p" / "h1" / "h2" / "h3" / "h4" / "h5" / "h6"

style_info = "[" delimitor* style_body:style_content delimitor* "]" {
  return style_body
}

style_content = sentence / ''



// a sentence is bunch of alphanumeric characters
// a sentence is concatanation of words seperated by space; a word is group of alphanumeric characters without any space
// a sentence can be surrounded by an optional delimitor
sentence = n_words:normal_words+ {
  return {
    sentence: n_words.join(' ')
  }
}

normal_words = word:word delimitor* {
  return word
}

word = letter:letter+ {
  return letter.join('')
}

letter = [a-z] / [A-Z] / [0-9]
