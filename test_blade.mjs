import peg from 'pegjs'
import fs from 'node:fs'
const parser = peg.generate(fs.readFileSync('./blade_grammar.pegjs', 'utf-8'))

console.log(JSON.stringify(parser.parse(fs.readFileSync('./test.bl', 'utf-8'))))
