import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Home, About, Events, Products, Contact, Whoops404 } from './components/ui/Pages';
import Page from './components/ui/Page';
// import { Provider } from 'react-redux';
// import App from './components/App';
// import storeFactory from './store';

// const store = storeFactory();

window.React = React;

render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/" component={Page}>
      <Route path="/about" component={About} />
      <Route path="/events" component={Events} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
    </Route>
    <Route path="*" component={Whoops404} />
  </Router>,
  document.getElementById('react-container')
);

// window.store = store;

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('react-container')
// );
