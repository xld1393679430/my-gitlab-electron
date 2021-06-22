import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Resume from '@src/container/resume';
import Root from '@src/container/root';
import ROUTER from '@common/constants/router';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.resume}>
          <Resume />
        </Route>
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
