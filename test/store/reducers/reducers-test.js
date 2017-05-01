import C from '../../../src/constants';
import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import { color, colors, sort } from '../../../src/store/reducers';
import { omit } from 'ramda';

describe ('color reducer', () => {
  it ('ADD_COLOR success', () => {
    const state = {};
    const action = {
      type: C.ADD_COLOR,
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      timestamp: new Date().toString()
    };
    const expectedResult = {
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      timestamp: action.timestamp,
      rating: 0
    };
    deepFreeze(state);
    deepFreeze(action);
    expect(color(state, action)).to.deep.equal(expectedResult);
  });

  it ('RATE_COLOR success', () => {
    const state = {
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
      rating: undefined
    };
    const action = {
      type: C.RATE_COLOR,
      id: 0,
      rating: 3
    };
    const expectedResult = {
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
      rating: 3
    };
    deepFreeze(state);
    deepFreeze(action);
    expect(color(state, action)).to.deep.equal(expectedResult);
  });
});

describe('colors reducer', () => {
  it('ADD_COLOR success', () => {
    const state = [];
    const action = {
      type: C.ADD_COLOR,
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      timestamp: new Date().toString()
    };
    deepFreeze(state);
    deepFreeze(action);
    const newState = colors(state, action);
    expect(newState.length).to.equal(1);
    expect(newState[0]).to.deep.equal(omit('type', { ...action, rating: 0 }));
  });

  it('RATE_COLOR success', () => {
    const action = {
      type: 'RATE_COLOR',
      id: '2',
      rating: 5
    };

    const state = [
      {
        id: '1',
        rating: 1
      },
      {
        id: '2',
        rating: 0
      }
    ];

    deepFreeze(state);
    deepFreeze(action);
    const newState = colors(state, action);
    expect(newState.filter(color => color.id === '1')[0].rating).to.equal(1);
    expect(newState.filter(color => color.id === '2')[0].rating).to.equal(5);
  });

});

describe('sort reducer', () => {
  it ('SORT_COLORS success', () => {
    const state = 'SORT_BY_DATE';
    const action = {
      type: C.SORT_COLORS,
      sortBy: 'SORT_BY_RATING'
    };
    deepFreeze(state);
    deepFreeze(action);
    expect(sort(state, action)).to.equal('SORT_BY_RATING');
  });
});
