start = document

// !!delimiting information
// if there are more than one block
// if there is more than one block there should be at least on all_delimitor between them
document = all_delimitor* content:block rest_block:rest_block* all_delimitor* {
  return [
    content,
    ...rest_block
  ]
} / all_delimitor*

rest_block = all_delimitor+ block:block {
  return block
}

block "block" = block:(with_style_block / sentence) {
  return {
    "block": block
  }
}

with_style_block = tag:tagname all_delimitor* style_info:style_block all_delimitor* body:body {
  return {
    tag,
    style_info,
    body
  }
}

tagname = "(" all_delimitor* tag:tag all_delimitor* ")" {
  return tag
}

style_block = "[" all_delimitor* kv_pair:kv_pair* all_delimitor* "]" {
  return [...kv_pair]
}

kv_pair = key:key space_delimitor* ":" value:value space_delimitor* semicolon all_delimitor* {
  return {[key]: value}
}

key = word

value = word

body = "{" document:document "}" {
  return document
}

// if there is more than one word there should be at least on all_delimitor between them
sentence = start_word:word rest_words:rest_words* semicolon {
  return [start_word, ...rest_words].join(' ')
}

rest_words = all_delimitor+ word:word {
  return word
}
word = letter:letter+ {
  return letter.join('')
}

// constants
letter = [a-z] / [A-Z] / [0-9]

tag = "p" / "h1" / "h2" / "h3" / "h4" / "h5" / "h6" / "i"

all_delimitor = " " / "\n"

space_delimitor = " "

semicolon = ";"
