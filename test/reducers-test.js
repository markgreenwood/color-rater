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

    assert(false, 'TODO: Write this test');
  });
});