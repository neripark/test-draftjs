import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Editor, EditorState } from 'draft-js';

storiesOf("draft-js-test", module)
.add("default", () => { 

  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(),
  );

  return (
    <div>
      <h1>Draft.js</h1>
      <Editor editorState={editorState} onChange={setEditorState}/>
    </div>
  )
});
