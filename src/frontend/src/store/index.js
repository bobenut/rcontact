import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from '../reducers'

const middleware = [ thunk ];

console.log('created==================================================')
const store = createStore(
  reducer, 
  applyMiddleware(...middleware)
);

store.subscribe(() => {
  console.log('+++++++++++++++++++++++++++++++++++++')
  console.log(store.getState())
  console.log('-------------------------------------')
})

export default store