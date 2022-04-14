import axios from 'axios';
import ENVIRONMENT from '@/utils/Environment';

const api = axios.create({
  baseURL: ENVIRONMENT.API_HOST,
});

api.interceptors.request.use((config) => {
  const headers = {
    ...config.headers,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return { ...config, headers };
});

api.interceptors.response.use(async (config) => ({ ...config }));

export default api;
