/**
 * User Reducer File
 * @author Sabohi Zaidi
 * @description User
 *  reducer
 */

import { userConstants } from './UserConstants';

const initialState = {
  userList: [],
  userError: {},
};

export default function userReducer(state = initialState, action = {}) {
  switch (action?.type) {
    case userConstants.GET_USERS_REQUEST:
      return {
        ...state,
        userList: [],
        userError: action?.error || action.response,
      };
    case userConstants.GET_USERS_SUCCESS:
      return {
        ...state,
        userList: action?.data || [],
        userError: {},
      };
    case userConstants.GET_USERS_FAILURE:
      return {
        ...state,
        userError: action?.data || action?.error,
      };
    default:
      return { ...state };
  }
}
