import { fetchUsersInfo } from '@/api/userApi';
import { userConstants } from './UserConstants';

export const getUsersInfo = () => async (dispatch) =>
  fetchUsersInfo()
    .then((response) => {
      dispatch({
        type: userConstants.GET_USERS_SUCCESS,
        data: response,
      });
      return response;
    })
    .catch((err) => {
      dispatch({
        type: userConstants.GET_USERS_FAILURE,
        error: err,
      });
    });