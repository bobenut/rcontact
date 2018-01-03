import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import 'antd/lib/style/index.css'
import reducer from './reducers'
import App from './containers/App';

const middleware = [ thunk ];

const store = createStore(
  reducer, 
  applyMiddleware(...middleware)
);

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
