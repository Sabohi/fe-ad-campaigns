import { userConstants } from '@/redux/users/UserConstants';
import userReducer from '@/redux/users/UserReducer';
import { userTestData } from './ReduxUserTestData';

describe('Testing userReducer function', () => {
  const action = { type: '', payload: {}, error: '' };
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(userTestData.initialState);
  });
  it('should handle GET_USERS_REQUEST', () => {
    action.type = userConstants.GET_USERS_REQUEST;
    expect(userReducer({}, action)).toEqual({ userList: [], userError: {} });
  });
  it('should handle GET_USERS_SUCCESS', () => {
    action.type = userConstants.GET_USERS_SUCCESS;
    action.data = [{ id: 1, name: 'Nicholos' }];
    expect(userReducer({}, action)).toEqual({ userList: [{ id: 1, name: 'Nicholos' }], userError: {} });
  });
  it('handle GET_USERS_FAILURE', () => {
    action.type = userConstants.GET_USERS_FAILURE;
    action.error = {error: 'no data'};
    expect(userReducer({}, action)).toEqual({  userList: [], userError: {error: 'no data'} });
  });
});
