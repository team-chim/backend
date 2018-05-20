const request = require('supertest');
const app = require('../../app');

const STUDENTS = require('../../config/students_mock.js')
const EXIST_STUDENT = STUDENTS.EXIST_STUDENT;
const NON_EXIST_STUDENT = STUDENTS.NON_EXIST_STUDENT;
const YEAR = 2016;
const SEMESTER = 2;

describe('Test the API Test path - v2/students', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/v2/students');
        expect(response.statusCode).toBe(200);
    });
})

describe('Test the API path - /v2/students/:stuid', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Test the API path - /v2/students/:stuid/registered', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/registered`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/registered`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Test the API path - /v2/students/:stuid/registered/:year', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/registered/${YEAR}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/registered/${YEAR}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Test the API path - /v2/students/:stuid/registered/:year/:semester', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/registered/${YEAR}/${SEMESTER}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/registered/${YEAR}/${SEMESTER}`);
        expect(response.statusCode).toBe(404);
    });
})
