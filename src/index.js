import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promise from 'redux-promise';

import rootReducer from "./reducers";
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';
import Header from './components/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router>
      <div>
          <Header />
          <hr />
          <Route exact path="/posts/:id" component={PostShow} />
          <Route exact path="/new" component={PostNew} />
          <Route exact path="/" component={PostIndex} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
