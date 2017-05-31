import React from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import { Home, About, Events, Products, Contact,
  Company, History, Services, Location, Whoops404, Page } from '../components/ui/Pages';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/" component={Page}>
      <Route path="/about" component={About}>
        <IndexRoute component={Company}/>
        <Route path="history" component={History}/>
        <Route path="services" component={Services}/>
        <Route path="location" component={Location}/>
      </Route>
      <Route path="/events" component={Events} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
    </Route>
    <Route path="*" component={Whoops404} />
  </Router>
);
