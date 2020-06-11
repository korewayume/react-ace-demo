import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SQLEditor from "./components/SQLEditor";
import "./App.css";
import schema from "assets/exampleSchema.json"

function App() {
  const doNothingHandler = () => {
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <SQLEditor
              className="SQLEditor"
              schema={schema.schema}
              autocompleteEnabled={true}
              onChange={doNothingHandler}
              onSelectionChange={doNothingHandler} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
