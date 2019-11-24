import React from 'react';
import nx from '@feizheng/next-js-core2';
import { Provider, inject } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import stores from '@/components/stores';
import ModuleDashboard from '@/modules/dashboard';
import ModuleChartEditor from '@/modules/chart-editor';

export default class extends React.Component {
  componentDidMount() {
    console.log('hello!', nx);
    console.log(stores);
  }

  render() {
    return (
      <Provider {...stores}>
        <Router>
          <div className="hello">
            <p>
              <Link to="/">TO Chart</Link>
            </p>
            <p>
              <Link to="/dashboard">TO Dashboard</Link>
            </p>
          </div>
          <Switch>
            <Route path="/" exact>
              <ModuleChartEditor />
            </Route>
            <Route path="/dashboard">
              <ModuleDashboard />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
