import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Newsform from "./components/newsform";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact key="general" path="/"><Newsform category="general" /></Route>
          <Route exact key="business" path="/business"><Newsform category="business" /></Route>
          <Route exact key="entertainment" path="/entertainment"><Newsform category="entertainment" /></Route>
          <Route exact key="health" path="/health"><Newsform category="health" /></Route>
          <Route exact key="science" path="/science"><Newsform category="science" /></Route>
          <Route exact key="sports" path="/sports"><Newsform category="sports" /></Route>
          <Route exact key="technology" path="/technology"><Newsform category="technology" /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
