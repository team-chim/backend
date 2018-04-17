const request = require('supertest');
const app = require('./app');

describe('Test the root path - /', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
})

describe('Test the API Test path - /api/test', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/api/test');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
    });
})