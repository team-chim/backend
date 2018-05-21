const request = require('supertest');
const app = require('../../../app');

const MOCK = require('../../../config/mock');
const EXIST_STUDENT = MOCK.EXIST_STUDENT;
const NON_EXIST_STUDENT = MOCK.NON_EXIST_STUDENT;

describe(`Test the API path - /v2/students/:stuid/payments`, () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/payments`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on student not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/payments`);
        expect(response.statusCode).toBe(404);
    });

})