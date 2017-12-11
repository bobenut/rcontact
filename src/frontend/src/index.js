import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();

store.subscribe(() => {
  console.log('+++++++++++++++++++++++++++++++++++++')
  console.log(store.getState())
  console.log('-------------------------------------')
})
