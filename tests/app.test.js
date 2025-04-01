const request = require('supertest');
const app = require('../app');

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

  afterAll((done) => {
    app.close(done);
  });
});
