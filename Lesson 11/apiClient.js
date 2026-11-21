import axios from 'axios';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
});

apiClient.interceptors.request.use(
  (config) => {
    config.metadata = { startTime: Date.now() };
    console.log(`[REQUEST] ${config.method.toUpperCase()} ${config.baseURL}${config.url}`);
    if (config.params) {
      console.log('[REQUEST] params:', config.params);
    }
    if (config.data) {
      console.log('[REQUEST] body:', config.data);
    }
    return config;
  },
  (error) => {
    console.error('[REQUEST ERROR]', error.message);
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    const duration = Date.now() - response.config.metadata.startTime;
    const { method, url } = response.config;
    console.log(
      `[RESPONSE] ${method.toUpperCase()} ${url} -> ${response.status} ${response.statusText} (${duration} ms)`,
    );
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, config } = error.response;
      console.error(`[RESPONSE ERROR] ${config.method.toUpperCase()} ${config.url} -> ${status}`);
    } else {
      console.error('[RESPONSE ERROR]', error.message);
    }
    return Promise.reject(error);
  },
);
