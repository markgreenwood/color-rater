import { createStore, combineReducers, applyMiddleware } from 'redux';
import { colors, sort } from './reducers';
import stateData from '../../data/initialState';

const storeFactory = (initialState=stateData) => {
  applyMiddleware(logger, saver)(createStore)(combineReducers({ colors, sort }),
    (localStorage['redux-store']) ?
      JSON.parse(localStorage['redux-store']) :
      initialState
  );
};

export default storeFactory;

// const store = createStore(
//   combineReducers({ colors, sort })
// );
//
// console.log(store.getState());
