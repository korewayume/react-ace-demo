import AceEditor from "react-ace";
import SQLEditor from "components/SQLEditor";
import exampleSchema from "assets/exampleSchema.json";
import React, {useState, useEffect} from "react";

const doNothing = () => {
}

function IndexPage() {
  const [schemaString, setSchemaString] = useState(JSON.stringify(exampleSchema.schema, null, 2));
  const [schema, setSchema] = useState(exampleSchema.schema);
  const [haveSchemaError, setHaveSchemaError] = useState(false);

  useEffect(() => {
    try {
      setSchema(JSON.parse(schemaString))
      setHaveSchemaError(false)
    } catch {
      setHaveSchemaError(true)
    }
  }, [schemaString])

  const editorOptions = {
    behavioursEnabled: true,
    enableSnippets: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: false,
    autoScrollEditorIntoView: true,
  }

  return (
    <div style={{display: "flex", height: "100vh"}}>
      <div style={{width: "300px"}}>
        <div style={{fontSize: "18px", margin: "18px 0", height: "20px"}}>
          <span>Schema: </span>
          {haveSchemaError ? <span style={{color: "red"}}>SchemaError</span> : null}
        </div>
        <AceEditor
          theme="textmate"
          mode="json"
          value={schemaString}
          editorProps={{$blockScrolling: Infinity}}
          width="100%"
          height="calc(100% - 56px)"
          setOptions={editorOptions}
          showPrintMargin={false}
          wrapEnabled={false}
          onChange={setSchemaString}
        />
      </div>
      <div style={{width: "calc(100% - 300px)"}}>
        <div style={{fontSize: "18px", margin: "18px 0", height: "20px"}}>SQL Editor:</div>
        <SQLEditor
          style={{height: "calc(100% - 56px)"}}
          className="SQLEditor"
          schema={schema}
          autocompleteEnabled={true}
          onChange={doNothing}
          onSelectionChange={doNothing} />
      </div>
    </div>
  );
}

export default IndexPage
