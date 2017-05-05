import storeFactory from '../../src/store/index';

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
