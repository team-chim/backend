const request = require('supertest');
const app = require('../../../app');

const MOCK = require('../../../config/mock');
const EXIST_STUDENT = MOCK.EXIST_STUDENT;
const NON_EXIST_STUDENT = MOCK.NON_EXIST_STUDENT;

const EXIST_YEAR = 2016;
const NON_EXIST_YEAR = 1970;
const EXIST_SEMESTER = 2;
const NON_EXIST_SEMESTER = 4;

describe('Get all academic years - /v2/academic/years', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/v2/academic/years');
        expect(response.statusCode).toBe(200);
    });
})

describe('Get a specific academic year - /v2/academic/years/:year', () => {
    test(`It should response the GET method on exist [year = ${EXIST_YEAR}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${EXIST_YEAR}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [year = ${NON_EXIST_YEAR}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${NON_EXIST_YEAR}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get all academic semesters of a year - /v2/academic/years/:year/semesters', () => {
    test(`It should response the GET method on exist [year = ${EXIST_YEAR}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${EXIST_YEAR}/semesters`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [year = ${NON_EXIST_YEAR}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${NON_EXIST_YEAR}/semesters`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get a academic semester of a year - /v2/academic/years/:year/semesters/:semester', () => {
    test(`It should response the GET method on exist [year = ${EXIST_YEAR}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${EXIST_YEAR}/semesters/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [year = ${NON_EXIST_YEAR}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${NON_EXIST_YEAR}/semesters/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(404);
    });

    test(`It should response the GET method on not exist [semester = ${NON_EXIST_SEMESTER}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${EXIST_YEAR}/semesters/${NON_EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(404);
    });
})