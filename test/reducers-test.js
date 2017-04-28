const assert = require('assert');
const reducers = require('../src/store/reducers');
const _ = require('lodash');

describe ('color reducer', () => {
  it ('adds color', () => {
    const action = {
      type: 'ADD_COLOR',
      id: '1',
      color: '#0000FF',
      title: 'Big Blue',
      timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)'
    };
    const state = reducers.color({}, action);
    assert.deepEqual(state, Object.assign({}, _.omit(action, ['type']), { rating: 0 }));
  });

  it ('rates color', () => {
    const action = {
      type: 'RATE_COLOR',
      id: '1',
      rating: 5
    };

    const initialState = {
      id: '1',
      color: '#0000FF',
      title: 'Big Blue',
      timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)',
      rating: 0
    };

    assert.deepEqual(reducers.color(initialState, action), { ...initialState, rating: 5 });
  });
});

describe('colors reducer', () => {
  it ('adds color', () => {
    const action = {
      type: 'ADD_COLOR',
      id: '1',
      color: '#0000FF',
      title: 'Big Blue',
      timestamp: 'Thu Mar 10 2016 01:11:12 GMT-0800 (PST)'
    };

    const state = reducers.colors([], action);
    assert.deepEqual(state, [Object.assign({}, _.omit(action, ['type']), { rating: 0 })]);
  });

  it ('rates color', () => {
    const action = {
      type: 'RATE_COLOR',
      id: '2',
      rating: 5
    };

    const initialState = [
      {
        id: '1',
        rating: 1
      },
      {
        id: '2',
        rating: 0
      }
    ];

    const state = reducers.colors(initialState, action);
    assert.equal(state.filter(color => color.id === '1')[0].rating, 1);
    assert.equal(state.filter(color => color.id === '2')[0].rating, 5);
  });
});
