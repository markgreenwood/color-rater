import storeFactory from '../../src/store';
import { rateColor } from '../../src/actions';
import jsdom from 'jsdom';
import { expect } from 'chai';
const { JSDOM } = jsdom;

global.document = new JSDOM('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.localStorage = { 'redux-store': false };
global.console.groupCollapsed = () => {};
global.console.groupEnd = () => {};

describe('rateColor', () => {
  let store, colors = [
    {
      id: '3',
      title: 'Rad Red',
      color: '#FF0000',
      rating: 3,
      timestamp: '2016-05-05'
    }
  ];

  before(() => {
    store = storeFactory({ colors });
    store.dispatch(rateColor('3', 5));
  });

  it('should rate the color', () => {
    expect(store.getState().colors[0].rating).to.equal(5);
  });

});
