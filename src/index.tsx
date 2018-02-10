import 'semantic-ui-css/semantic.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router';
import { initializeApp } from 'firebase';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import App from './components/App';
import UserStore from './stores/UserStore';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  UserStore: UserStore,
  RoutingStore: routingStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);

function startApp() {
  console.log('in startApp');
  ReactDOM.render(
    <Provider {...stores}>
      <Router history={history}>
        <AppContainer>
          <App />
        </AppContainer>
      </Router>
    </Provider>
    ,
    document.getElementById('root')
  );
}
startApp();
