import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

const CatList = React.lazy(() => import('./modules/cat-list'));
const AddCat = React.lazy(() => import('./modules/add-cat'));

const App = () => {
  const [cats, setCats] = useState<any[]>([]);

  return (
    <div className="container p-5">
      <div className="row justify-content-sm-center">
        <div className="col-sm-5">
          <React.Suspense fallback={<span>Loading...</span>}>
            <Router>
              <ol>
                <NavLink to="/" className="breadcrumb-item" activeClassName="active">
                  Home
                </NavLink>
                <NavLink to="/add" className="breadcrumb-item" activeClassName="active">
                  Add Cat
                </NavLink>
              </ol>
              <Switch>
                <Route exact path="/" render={() => <CatList cats={cats} />} />
                <Route
                  path="/add"
                  render={(props) => {
                    return (
                      <AddCat
                        onSubmit={(cat: any) => {
                          setCats([...cats, cat]);
                          props.history.push('/');
                        }}
                      />
                    );
                  }}
                />
                <Route exact path="/cat/:name" render={() => <div>SingleCat</div>} />
              </Switch>
            </Router>
          </React.Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
