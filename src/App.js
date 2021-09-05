import React from "react";
import Nav from "./Components/Navbar/Nav";
import News from "./Components/News/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.scss";
function App() {
  return (
    <>
      <Router>
        <Nav />

        <div className="page-content">
          <Switch> 
            <Route path="/business">
              <News key="business" pagesize="18" category="business" />
            </Route>
            <Route path="/entertainment">
              <News key="entertainment" pagesize="18" category="entertainment" />
            </Route>
            <Route path="/sports">
              <News key="sports" pagesize="18" category="sports" />
            </Route>
            <Route path="/health">
              <News key="health" pagesize="18" category="health" />
            </Route>
            <Route path="/science">
              <News key="science" pagesize="18" category="science" />
            </Route>
            <Route path="/technology">
              <News key="technology" pagesize="18" category="technology" />
            </Route>
            <Route path="/">
              <News key="general" pagesize="18" category="general" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
