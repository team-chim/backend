const request = require('supertest');
const app = require('../../../app');

const MOCK = require('./mock');
const EXIST_FACULTY = MOCK.EXIST_FACULTY;
const NON_EXIST_FACULTY = MOCK.NON_EXIST_FACULTY;


describe('Get all faculties - /v2/faculties', () => {
    test(`It should response the GET method`, async () => {
        const response = await request(app).get(`/v2/faculties`);
        expect(response.statusCode).toBe(200);
    });
})

describe('Get a specific faculty - /v2/faculties/:fid', () => {
    test(`It should response the GET method on exist [fid = ${EXIST_FACULTY}]`, async () => {
        const response = await request(app).get(`/v2/faculties/${EXIST_FACULTY}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [fid = ${NON_EXIST_FACULTY}]`, async () => {
        const response = await request(app).get(`/v2/faculties/${NON_EXIST_FACULTY}`);
        expect(response.statusCode).toBe(404);
    });
})
