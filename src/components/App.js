import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'

function App() {
//  const [html, setHtml] = useLocalStorage('html', '')
//  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    //i don't need timeout
    const timeout = setTimeout(() => {
      //replace setSrcDoc with problemOne.test.js 
      setSrcDoc(`
        <html>
          <body></body>
          <css></css>
          <script>${js}</script>
        </html>
      `)
    }, 250)
    console.log(js);
    return () => clearTimeout(timeout)
  }, [js])

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane"> {/*this can be the response component */}
        
        <iframe //don't need this iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
