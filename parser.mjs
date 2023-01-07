import fs from 'node:fs/promises'
//I intend to use data structure that suits what I am doing
//loop through the whole document character by character
//the nesting of elements can be thought of as a stack(the parents deep inside the stack)

// stack <--- { check and push into stack }

const stack = []

const documentStr = await fs.readFile('./test.bl', 'utf-8')

function tagOpen() {

}

function tagClose() {

}

function bodyOpen() {

}

function bodyClose() {

}

function normalText() {

}

function parse(strArray) {
  for (let i; i < strArray.length; i++) {
    switch (strArray[i]) {
      case '(':
        tagOpen()
        break
      case ')':
        tagClose()
        break
      case '{':
        bodyOpen()
        break
      case '}':
        bodyClose()
        break
      default:
        normalText()
        break
    }
  }
}
