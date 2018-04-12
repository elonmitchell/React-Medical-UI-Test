import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import ForecastPage from './containers/ForecastPage';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={ForecastPage}/>
      <Route path="forecast" component={ForecastPage}/>
    </Route>
  </Route>
);
