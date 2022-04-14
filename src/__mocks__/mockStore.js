import configureStore from 'redux-mock-store';

const mockConfigureStore = configureStore();

function mockStore(initialState) {
  return mockConfigureStore(initialState);
}

export default mockStore;
