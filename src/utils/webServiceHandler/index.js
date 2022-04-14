/**
 * API handler
 * @author Sabohi Zaidi
 * @description Wrapper for easy API handling
 */

import api from '@/services/Api';
import { GLOBALCONSTANTS } from '../GlobalConstants';
import Toast from '../Toast';

/**
 * @author Sabohi Zaidi
 * @param {string} url - API Endpoint
 * @async
 * @description function for GET type API
 */
export const getAPIData = async (url) => {
  const { NOINTERNET } = GLOBALCONSTANTS;
  const internet = checkConnectivity();
  try {
    if (!internet) {
      Toast.info(NOINTERNET);
    }
    const response = await api.get(url);
    return response.data;
  } catch (err) {
    return {
      type: 'error',
      message: err,
    };
  }
};

/**
 * @author Sabohi Zaidi
 * @description check network connectivity for web
 */
const checkConnectivity = () => navigator.onLine;
