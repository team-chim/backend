const request = require('supertest');
const app = require('../../src/app');

const MOCK = require('../../src/config/mock.js');
const EXIST_STUDENT = MOCK.EXIST_STUDENT;
const NON_EXIST_STUDENT = MOCK.NON_EXIST_STUDENT;


describe('Test the API path - /v2/students/:stuid/fee', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/fee`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/fee`);
        expect(response.statusCode).toBe(404);
    });
})