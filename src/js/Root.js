import React from 'react'
import { Provider } from 'react-redux'
import {Template, Home, Puzzle} from './modules'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const Root = ({store})=> (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Template.default}>
        <IndexRoute component={Home.default}/>
        <Route path="puzzle">
          <IndexRoute component={Puzzle.default}/>
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root
