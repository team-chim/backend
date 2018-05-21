const request = require('supertest');
const app = require('../../src/app');

const MOCK = require('../../src/config/mock.js');
const EXIST_TEACHER = MOCK.EXIST_TEACHER;
const NON_EXIST_TEACHER = MOCK.NON_EXIST_TEACHER;

const EXIST_YEAR = 2016;
const EXIST_SEMESTER = 2;

describe('Get all teachers - /v2/teachers', () => {
    test(`It should response the GET method`, async () => {
        const response = await request(app).get(`/v2/teachers`);
        expect(response.statusCode).toBe(200);
    });
})

describe('Get a specific teacher - /v2/teachers/:tid', () => {
    test(`It should response the GET method on exist [tid = ${EXIST_TEACHER}]`, async () => {
        const response = await request(app).get(`/v2/teachers/${EXIST_TEACHER}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [tid = ${NON_EXIST_TEACHER}]`, async () => {
        const response = await request(app).get(`/v2/teachers/${NON_EXIST_TEACHER}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get all advisees under a teacher - /v2/teachers/:tid/advisees', () => {
    test(`It should response the GET method on exist [tid = ${EXIST_TEACHER}]`, async () => {
        const response = await request(app).get(`/v2/teachers/${EXIST_TEACHER}/advisees`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [tid = ${NON_EXIST_TEACHER}]`, async () => {
        const response = await request(app).get(`/v2/teachers/${NON_EXIST_TEACHER}/advisees`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get teaching schedule for a teacher - /v2/teachers/:tid/schedules/teach/:year/:semester', () => {
    test(`It should response the GET method on exist [tid = ${EXIST_TEACHER}]`, async () => {
        const response = await request(app).get(`/v2/teachers/${EXIST_TEACHER}/schedules/teach/${EXIST_YEAR}/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [tid = ${NON_EXIST_TEACHER}]`, async () => {
        const response = await request(app).get(`/v2/teachers/${NON_EXIST_TEACHER}/schedules/teach/${EXIST_YEAR}/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(404);
    });
})
