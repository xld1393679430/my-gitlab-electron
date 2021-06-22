import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Title from './title';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>可视化平台1</div>
          <div>这是 Electron + React </div>
          <Title text="abc" />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
