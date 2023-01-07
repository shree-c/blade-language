start = block *
block = delimitor* tag:tag_name delimitor+ style:style_info delimitor+ body:tag_block delimitor*{
  return {
    tag,
    style,
    body
  }
}

delimitor = " " / "\n"

tag_name = "p" / "h1" / "h2" / "h3" / "h4" / "h5" / "h6"

style_info = "[" delimitor* style_body:style_content delimitor* "]" {
  return style_body
}


// a sentence is bunch of alphanumeric characters
// a sentence is concatanation of words seperated by space; a word is group of alphanumeric characters without any space
// a sentence can be surrounded by an optional delimitor
style_content = sentence / ''

tag_block = "{" delimitor* tag_body:sentence delimitor* "}" {
  return tag_body
}

sentence = n_words:normal_words* {
  return {
    sentence: n_words.join(' ')
  }
}

normal_words = word:word delimitor* {
  return word
}

word = letters:[a-z]+ {
  return letters.join('')
}


// words = word:word delimitor* {
//   return word
// }

// word = letters:[A-z0-9]+ {
//   return letters.join("")
// }


// style_info = delimitor* "[" delimitor* style_text:style_text delimitor* "]" delimitor+ {
//   return style_text.join(' ')
// }

// style_text = word*

// word = word:[A-z0-9]+ delimitor* {
//   return word.join('')
// }

// tag_block = delimitor* "{" delimitor* "this is block text" delimitor* "}" delimitor+


// 
// style_text = "this is style text"
// 
// 
// block_text = "this is block text"
// 

// hello world example
// start = delimitor? hello delimitor world delimitor

// delimitor = " " / "\n"
// hello = "hello"

// world = "world"
