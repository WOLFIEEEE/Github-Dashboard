import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error,Repodata,Followerdetail,Followingdetail } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <div>
      <AuthWrapper>
      <Router>
        <Switch>
        <PrivateRoute path="/" exact={true}>
      <Dashboard></Dashboard>
      </PrivateRoute>
      <Route path="/login">
      <Login />
      </Route>
      <Route path="/Repodata">
        <Repodata></Repodata>
      </Route>
      <Route path="/Followerdetail">
       <Followerdetail></Followerdetail>
      </Route>
      <Route path="/Followingdetail">
        <Followingdetail></Followingdetail>
      </Route>
      <Route path="*">
        <Error/>
      </Route>
      </Switch>
      </Router>
      </AuthWrapper>
    </div>
  );
}

export default App;
