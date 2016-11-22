import React from 'react'
import { Provider } from 'react-redux'
import {Template, DummyPage, Puzzle, Page} from './modules'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const Root = ({store})=> (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Template.default}>
        <IndexRoute component={DummyPage.default}/>
        <Route path="laikes">
          <IndexRoute component={Page.default}/>
          <Route path="puzzle">
            <IndexRoute component={Puzzle.default}/>
          </Route>
        </Route>
        <Route path="astikes">
          <IndexRoute component={Page.default}/>
          <Route path="puzzle">
            <IndexRoute component={Puzzle.default}/>
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root
