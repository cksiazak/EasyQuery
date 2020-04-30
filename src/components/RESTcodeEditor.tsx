import React, { useState } from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/webpack-resolver'

const RESTcodeEditor = (): JSX.Element => {
  const [code, setCode] = useState<string>('{}')

  const onChange = (e: string)=> {
    setCode(e)
 }
  return (
    <AceEditor
      mode='json'
      theme='github'
      value={code}
      onChange={onChange}
      name='code-editor'
      editorProps={{ $blockScrolling: true }}
    />
  )
}

export default RESTcodeEditor
