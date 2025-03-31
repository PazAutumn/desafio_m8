import request from 'supertest';
import app from './app'; // Asegúrate de exportar tu app de app.js

describe('API Tests', () => {
  it('should return all tasks', async () => {
    const response = await request(app).get('/tasks');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should return task by id', async () => {
    const response = await request(app).get('/tasks/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('name', 'Task 1');
  });

  it('should return 404 for non-existing task', async () => {
    const response = await request(app).get('/tasks/999');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Task not found');
  });
});
