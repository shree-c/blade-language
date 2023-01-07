import { generateKeyPair } from 'node:crypto'
import { readFileSync } from 'node:fs'

function readFromFile(fileName) {
  return readFileSync(fileName).toString()
}

/*
* define a language
* converter : language -> internal data structure(something like AST)
*   should check for syntax errors
*/

function htmlSkeleton(inp) {
  return `<html>
    <body>
      ${inp}
    </body>
  </html>`
}

/*
* gives ast as output
* any text seperated by a blank line is thought as paragraph
*/

function para(str) {
  if (typeof str !== 'string') {
    console.log(str)
    throw new Error('input should be string')
  }
  return str.split('\n\n')
}

const arg = process.argv[2]
if (!arg) {
  throw new Error('give a file as argument')
}

/*
* anything that starts with # followed by a text padded with single blank space is considered a heading
*/
function headings(str) {

}

// console.log(para(readFromFile(arg)))
/*
  - if there is no heading a the beginning it is considered as start of para
  - #s only at he beginning of the file is considered as heading
  - you cant nest paras inside paras
*/

const sampleAst = [
  {
    tokenType: 'p',
    content: 'some para'
  },
  {
    tokenType: 'h1',
    content: 'heading level 1'
  },
  {
    tokenType: 'p',
    content: 'second para'
  }
]

/*
- what if there is no content for heading
  - then, should handle '#<space>' and '#'
*/

function isHeading(str) {
  //check if its a heading
  str = str.join('')
  //with pattern starts with '#<space><string>\n'
  return str.startsWith('# ')
}

/*
*/
function getHeading(str) {
  //return [length and string]
  str = str.join('')
  let i = 2
  while (str[i] !== '\n' && i < str.length) {
    i++
  }
  return [i + 1, str.slice(2, i)]
}

function isSpace(char) {
  return (char === ' ' || char === '\n')
}

/*
* definition: ['letters up to '\n\n' || '\n#']
* return:
* total length of token
*/
function getPara(str) {
  str = str.join('')
  let i = 0
  while (i < str.length) {
    if (str[i] === '\n') {
      if (str[i + 1] === '\n') {
        i++
        break
      }
      if (str[i + 1] === '#' && str[i + 2] === ' ') {
        break
      }
    }
    i++
  }
  return [i + 1, str.slice(0, i - 1)]
}

function convertToAst(str) {
  //let's convert it to array
  console.log(str)
  const ast = []
  const arr = [...str]
  const len = arr.length
  for (let i = 0; i < len;) {
    if (isHeading(arr.slice(i))) {
      const [jump, str] = getHeading(arr.slice(i))
      if (str.length !== 0) {
        ast.push({
          tokenType: 'h1',
          content: str
        })
      }
      //jump curser to the beginning of next token and continue
      i += jump
      continue
    }
    //beginning of para
    const [jump, str] = getPara(arr.slice(i))
    if (str.length !== 0) {
      ast.push({
        tokenType: 'p',
        content: str
      })
    }
    console.log([jump, str, 'p'])
    i += jump
    //jump to next token and continue
  }
  return ast
}

function convertToHtml(ast) {
  let retstr = ''
  ast.forEach(element => {
    retstr += `<${element.tokenType}>${element.content}</${element.tokenType}>`
  })
  return retstr
}
console.log(htmlSkeleton(convertToHtml(convertToAst(readFromFile(arg)))))
