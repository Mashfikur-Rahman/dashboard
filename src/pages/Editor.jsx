import React from 'react';


import { EditorData } from '../data/dummy';
import { Header } from '../components';
import { RichTextEditorComponent, Inject } from '@syncfusion/ej2-react-richtexteditor';



const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Editor" category="App" />
      {/* <RichTextEditorComponent>
        <Inject />
      </RichTextEditorComponent> */}
    </div>
  )
}

export default Editor;