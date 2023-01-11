import Codemirror from '@uiw/react-codemirror'
import { html } from '@codemirror/lang-html'
import html_to_components from 'html-react-parser'
import { useState, useEffect } from 'react'
import { to_html } from '../../blade_to_html.mjs'
import { parse } from '../../blade_grammar.js'

export default function mirror() {
  const [codeString, setCodeString] = useState('')
  const [blade_string, setBlade_string] = useState(`
  (p) [] {
    hello world;
  }`)
  useEffect(() => {
    blade_change(blade_string)
  }, [blade_string])

  function blade_change(e) {
    try {
      const ast = parse(e)
      setCodeString(to_html(ast))
    } catch (e) {
      console.log(new Date().toLocaleTimeString(), e)
    }
  }
  return (
    <div id='mirror'>
      <Codemirror id='codemirror' value={blade_string}
        extensions={[html()]}
        height='80vh'
        onChange={(e) => setBlade_string(e)}
      />
      <div id='html_renderer'>{html_to_components(codeString)}</div>
    </div>
  )
}
