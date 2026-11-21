import { apiClient } from './apiClient.js';
import * as test from 'node:test';

describe('JSONPlaceholder API', () => {
  test('GET /posts/1 returns a single post', async () => {
    const response = await apiClient.get('/posts/1');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    expect(response.data).toEqual({
      userId: 1,
      id: 1,
      title: expect.any(String),
      body: expect.any(String),
    });
  });

  test('GET /posts returns a list of 100 posts', async () => {
    const response = await apiClient.get('/posts');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data).toHaveLength(100);
    response.data.forEach((post) => {
      expect(post).toEqual({
        userId: expect.any(Number),
        id: expect.any(Number),
        title: expect.any(String),
        body: expect.any(String),
      });
    });
  });

  test('GET /comments?postId=1 filters comments by post', async () => {
    const response = await apiClient.get('/comments', { params: { postId: 1 } });

    expect(response.status).toBe(200);
    expect(response.data).toHaveLength(5);
    response.data.forEach((comment) => {
      expect(comment.postId).toBe(1);
      expect(comment).toEqual({
        postId: 1,
        id: expect.any(Number),
        name: expect.any(String),
        email: expect.stringMatching(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
        body: expect.any(String),
      });
    });
  });

  test('POST /posts creates a new post', async () => {
    const newPost = { title: 'foo', body: 'bar', userId: 1 };

    const response = await apiClient.post('/posts', newPost);

    expect(response.status).toBe(201);
    expect(response.data).toEqual({ ...newPost, id: 101 });
  });

  test('POST /comments creates a new comment', async () => {
    const newComment = {
      postId: 1,
      name: 'Test comment',
      email: 'tester@example.com',
      body: 'Comment created by axios test',
    };

    const response = await apiClient.post('/comments', newComment);

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newComment);
    expect(response.data.id).toEqual(expect.any(Number));
  });
});
