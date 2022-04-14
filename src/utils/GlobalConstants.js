import ENV from './Environment';

export const GLOBALCONSTANTS = {
  NOINTERNET: 'You are disconnected! Please connect to Internet',
  URLS: {
    getUsers: `${ENV.API_HOST}/users`,
  },
  REACT_ROUTES: {
    HOME_COM: '/',
    NOT_FOUND_COMPONENT: '/404',
  },
  UNSAFE_LIFECYCLE_METHOD_NAMES: ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'],
};
