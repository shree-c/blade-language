import { useState } from 'react'
import Editor from "@monaco-editor/react"
import './App.css'

function App() {

  return (
    <div className="App" style={
      {
        outline: "1px red solid"
      }
    }>
      <Editor
        height="80vh"
        width="800px"
        defaultLanguage='javascript'
        defaultValue='Wut the hell'
      />
    </div>
  )
}

export default App
