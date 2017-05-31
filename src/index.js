import React from 'react';
import { render } from 'react-dom';
import routes from './routes';

// import { Provider } from 'react-redux';
// import App from './components/App';
// import storeFactory from './store';

// const store = storeFactory();

window.React = React;

render(
  routes,
  document.getElementById('react-container')
);

// window.store = store;

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('react-container')
// );
