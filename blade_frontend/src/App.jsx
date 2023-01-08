import Editor from "@monaco-editor/react"
import { useState } from 'react'
import Codemirror from '@uiw/react-codemirror'
import { html } from '@codemirror/lang-html'
import parse from 'html-react-parser'
import './App.css'

function App() {

  const [codeString, setCodeString] = useState('Hello world')
  return (
    <div className="App" style={
      {
        outline: "1px red solid"
      }
    }>
      <Codemirror value={codeString} height='200px'
        width='400px'
        extensions={[html()]}
        onChange={(e) => setCodeString(e)}
      />
      <div>{parse(codeString)}</div>
    </div>
  )
}

export default App
