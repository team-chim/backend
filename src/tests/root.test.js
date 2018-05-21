const request = require('supertest');
const app = require('../app');

describe('Test the root path - /', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
})

describe('Test the API Test path - /v1/test', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/v1/test');
        expect(response.statusCode).toBe(200);
    });
})


describe('Test the API Test path - /v2/test', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/v2/test');
        expect(response.statusCode).toBe(200);
    });
})

