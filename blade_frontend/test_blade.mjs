import peg from 'pegjs'
import fs from 'node:fs'
import { to_html } from './blade_to_html.mjs'
const parser = peg.generate(fs.readFileSync('./blade_grammar.pegjs', 'utf-8'))

const ast = parser.parse(fs.readFileSync('./test.bl', 'utf-8'))

console.log(JSON.stringify(ast))

const str = to_html(ast)

fs.writeFileSync('./index.html', str, 'utf-8')
console.log('------->', str)
