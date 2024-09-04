import request from 'supertest';
import app from '../app';

describe('POST /api/signup', () => {
  test('should respond with a 200 status and JSON', async () => {
    const response = await request(app)
      .post('/api/signup/')
      .send({
        email: 'manchikantivarun05@gmail.com',
        password: 'Varun@05'
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toEqual(true);
  }, 15000);

  test('should respond with a 400 status and JSON when no data is sent', async () => {
    const response = await request(app)
      .post('/api/signup/');

    expect(response.status).toBe(400);
    expect(response.body.success).toEqual(false);
  }, 15000);
  
  test('should respond with a 400 status and JSON with invalid password', async () => {
    const response = await request(app)
      .post('/api/signup/')
      .send({
        email: 'tarun.jgs@gmail.com',
        password: 'abcd123'
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toEqual(false);
  }, 15000);
});
