import React from 'react'
import { Provider } from 'react-redux'
import {Template, DummyPage, Puzzle, ChoosePuzzle, Page} from './modules'
import {Router, Route, IndexRoute, IndexRedirect, hashHistory} from 'react-router';

const Root = ({store})=> (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Template.default}>
        <IndexRedirect to="el" />
        <Route path=":lang">
        <IndexRoute component={DummyPage.default}/>
          <Route path=":category">
            <IndexRoute component={Page.default}/>
            <Route path="puzzle">
              <IndexRoute component={ChoosePuzzle.default}/>
              <Route path=":index" component={Puzzle.default} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root
