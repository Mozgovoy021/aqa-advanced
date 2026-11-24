import { jest } from '@jest/globals';
import axios from 'axios';
import { getFromWrongUrl, getPostsWithHeadersAndParams, getUser } from './api.js';

describe('Task 1: error handling', () => {
  test('returns error message for wrong URL', async () => {
    const message = await getFromWrongUrl();

    expect(message).toBe('Request failed with status 404');
  });
});

describe('Task 2: request headers and params', () => {
  test('sends custom headers and params', async () => {
    const response = await getPostsWithHeadersAndParams();

    expect(response.status).toBe(200);
    expect(response.config.headers['X-Custom-Header']).toBe('aqa-advanced');
    expect(response.config.params).toEqual({ userId: 1 });
    expect(response.request.path).toBe('/posts?userId=1');
    response.data.forEach((post) => expect(post.userId).toBe(1));
  });
});

describe('Task 3: mocking axios', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('returns user data on successful request', async () => {
    const user = { id: 1, name: 'Test User' };
    jest.spyOn(axios, 'get').mockResolvedValue({ status: 200, data: user });

    const result = await getUser(1);

    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
    expect(result).toEqual(user);
  });

  test('returns error message on failed request', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue(new Error('Network Error'));

    const result = await getUser(1);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(result).toBe('Error: Network Error');
  });
});
