import React from 'react';
import { render } from 'react-dom';
import './index.css';
import configureStore from './store/configureStore';
import { FeatheredHomesApp } from './App';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.css'


const store = configureStore();

render(
  <Provider store={store}>
     <FeatheredHomesApp store={store}/>
  </Provider>,
  document.getElementById('root')
);
