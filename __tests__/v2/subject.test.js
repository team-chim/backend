const request = require('supertest');
const app = require('../../app');

const MOCK = require('../../config/mock.js')
const EXIST_STUDENT = MOCK.EXIST_STUDENT;
const NON_EXIST_STUDENT = MOCK.NON_EXIST_STUDENT;

const EXIST_YEAR = 2016;
const NON_EXIST_YEAR = 1970;
const EXIST_SEMESTER = 2;
const NON_EXIST_SEMESTER = 4;

const EXIST_SUBJECT = '2110211';
const NON_EXIST_SUBJECT = '5555555';
const EXIST_SECTION = 1;

describe('Get all subjects - /v2/subjects', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/v2/subjects');
        expect(response.statusCode).toBe(200);
    });
})

describe('Get a specific subject - /v2/subjects/:subid', () => {
    test(`It should response the GET method on exist [subid = ${EXIST_SUBJECT}]`, async () => {
        const response = await request(app).get(`/v2/subjects/${EXIST_SUBJECT}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [subid = ${NON_EXIST_SUBJECT}]`, async () => {
        const response = await request(app).get(`/v2/subjects/${NON_EXIST_SUBJECT}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get a specific class - /v2/subjects/:subid/:year/:semester', () => {
    test(`It should response the GET method on exist [subid = ${EXIST_SUBJECT}]`, async () => {
        const response = await request(app).get(`/v2/subjects/${EXIST_SUBJECT}/${EXIST_YEAR}/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [subid = ${NON_EXIST_SUBJECT}]`, async () => {
        const response = await request(app).get(`/v2/subjects/${NON_EXIST_SUBJECT}/${EXIST_YEAR}/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get sections of a specific class - /v2/subjects/:subid/:year/:semester/sections', () => {
    test(`It should response the GET method on exist [subid = ${EXIST_SUBJECT}]`, async () => {
        const response = await request(app).get(`/v2/subjects/${EXIST_SUBJECT}/${EXIST_YEAR}/${EXIST_SEMESTER}/sections`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [subid = ${NON_EXIST_SUBJECT}]`, async () => {
        const response = await request(app).get(`/v2/subjects/${NON_EXIST_SUBJECT}/${EXIST_YEAR}/${EXIST_SEMESTER}/sections`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get a specific section - /v2/subjects/:subid/:year/:semester/sections/:sectno', () => {
    test(`It should response the GET method on exist [subid = ${EXIST_SUBJECT}]`, async () => {
        const response = await request(app).get(`/v2/subjects/${EXIST_SUBJECT}/${EXIST_YEAR}/${EXIST_SEMESTER}/sections/${EXIST_SECTION}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [subid = ${NON_EXIST_SUBJECT}]`, async () => {
        const response = await request(app).get(`/v2/subjects/${NON_EXIST_SUBJECT}/${EXIST_YEAR}/${EXIST_SEMESTER}/sections/${EXIST_SECTION}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get students in a specific section - /v2/subjects/:subid/:year/:semester/sections/:sectno/students', () => {
    test(`It should response the GET method on exist [subid = ${EXIST_SUBJECT}]`, async () => {
        const response = await request(app).get(`/v2/subjects/${EXIST_SUBJECT}/${EXIST_YEAR}/${EXIST_SEMESTER}/sections/${EXIST_SECTION}/students`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [subid = ${NON_EXIST_SUBJECT}]`, async () => {
        const response = await request(app).get(`/v2/subjects/${NON_EXIST_SUBJECT}/${EXIST_YEAR}/${EXIST_SEMESTER}/sections/${EXIST_SECTION}/students`);
        expect(response.statusCode).toBe(404);
    });
})