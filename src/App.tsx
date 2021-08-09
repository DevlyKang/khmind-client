import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Gnb, Side } from '@khl/container';

import GlobalStyled from './styles/global-styles';

const Home = lazy(() => import(/* webpackChunkName: 'Home' */'@khl/pages/home/home'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={ <div /> }>
        <GlobalStyled />
        <Gnb />
        <Side />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
