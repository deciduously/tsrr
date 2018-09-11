import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { ChutzpahAction } from './actions/index';
import { chutzpah } from './reducers/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';

const store = createStore<StoreState, ChutzpahAction, {}, {}>(chutzpah, {
  chutzpah: 1,
  playerName: 'Sergio',
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
