import React from 'react'
import { Provider } from 'react-redux'
import {Template, DummyPage, Puzzle, Page} from './modules'
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';

const Root = ({store})=> (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Template.default}>
        <IndexRedirect to="el" />
        <Route path=":lang">
        <IndexRoute component={DummyPage.default}/>
          <Route path=":category">
            <IndexRoute component={Page.default}/>
            <Route path="puzzle" component={Puzzle.default}>
              <IndexRedirect to="1" />
              <Route path=":index" component={Puzzle.default} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root
