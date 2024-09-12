import { create } from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const apiClient = create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Functions to perform CRUD operations
export function getPosts() { return apiClient.get('/posts'); }
export function getPostById(id) { return apiClient.get(`/posts/${id}`); }
export function createPost(data) { return apiClient.post('/posts', data); }
export function updatePost(id, data) { return apiClient.put(`/posts/${id}`, data); }
export function deletePost(id) { return apiClient.delete(`/posts/${id}`); }
