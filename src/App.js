import React from "react";
import SQLEditor from "./components/SQLEditor";
import "./App.css";
import schema from "assets/exampleSchema.json"

function App() {
  const doNothingHandler = () => {
  }

  return (
    <div className="App">
      <SQLEditor
        className="SQLEditor"
        schema={schema.schema}
        autocompleteEnabled={true}
        onChange={doNothingHandler}
        onSelectionChange={doNothingHandler} />
    </div>
  );
}

export default App;
