import React from 'react';
import Main from './pages/Main';
// import Recruitments from './pages/Recruitments';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/results" component={Recruitments} /> */}
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;