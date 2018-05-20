const request = require('supertest');
const app = require('../../app');

const STUDENTS = require('../../config/students_mock.js')
const EXIST_STUDENT = STUDENTS.EXIST_STUDENT;
const NON_EXIST_STUDENT = STUDENTS.NON_EXIST_STUDENT;


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