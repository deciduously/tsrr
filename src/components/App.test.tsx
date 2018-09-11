import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { ChutzpahAction } from '../actions/index';
import { chutzpah } from '../reducers/index';
import { StoreState } from '../types/index';
import { Provider } from 'react-redux';

const store = createStore<StoreState, ChutzpahAction, {}, {}>(chutzpah, {
  chutzpah: 1,
  playerName: 'Sergio',
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
