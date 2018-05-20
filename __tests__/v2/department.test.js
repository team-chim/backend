const request = require('supertest');
const app = require('../../app');

const MOCK = require('../../config/mock.js')
const EXIST_FACULTY = MOCK.EXIST_FACULTY;
const NON_EXIST_FACULTY = MOCK.NON_EXIST_FACULTY;
const EXIST_DEPARTMENT = 10;
const NON_EXIST_DEPARTMENT = 99;

describe('Get all departments of a faculty - /v2/faculties/:fid/departments', () => {
    test(`It should response the GET method on exist [fid = ${EXIST_FACULTY}]`, async () => {
        const response = await request(app).get(`/v2/faculties/${EXIST_FACULTY}/departments`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [fid = ${NON_EXIST_FACULTY}]`, async () => {
        const response = await request(app).get(`/v2/faculties/${NON_EXIST_FACULTY}/departments`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get a specific department - /v2/faculties/:fid/departments/:depid', () => {
    test(`It should response the GET method on exist [fid = ${EXIST_FACULTY}, depid = ${EXIST_DEPARTMENT}]`, async () => {
        const response = await request(app).get(`/v2/faculties/${EXIST_FACULTY}/departments/${EXIST_DEPARTMENT}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [fid = ${NON_EXIST_FACULTY}, depid = ${EXIST_DEPARTMENT}]`, async () => {
        const response = await request(app).get(`/v2/faculties/${NON_EXIST_FACULTY}/departments/${EXIST_DEPARTMENT}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get the head of department - /v2/faculties/:fid/departments/:depid/head', () => {
    test(`It should response the GET method on exist [fid = ${EXIST_FACULTY}, depid = ${EXIST_DEPARTMENT}]`, async () => {
        const response = await request(app).get(`/v2/faculties/${EXIST_FACULTY}/departments/${EXIST_DEPARTMENT}/head`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [fid = ${NON_EXIST_FACULTY}, depid = ${EXIST_DEPARTMENT}]`, async () => {
        const response = await request(app).get(`/v2/faculties/${NON_EXIST_FACULTY}/departments/${EXIST_DEPARTMENT}/head`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get the teachers of a department - /v2/faculties/:fid/departments/:depid/teachers', () => {
    test(`It should response the GET method on exist [fid = ${EXIST_FACULTY}, depid = ${EXIST_DEPARTMENT}]`, async () => {
        const response = await request(app).get(`/v2/faculties/${EXIST_FACULTY}/departments/${EXIST_DEPARTMENT}/teachers`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [fid = ${NON_EXIST_FACULTY}, depid = ${EXIST_DEPARTMENT}]`, async () => {
        const response = await request(app).get(`/v2/faculties/${NON_EXIST_FACULTY}/departments/${EXIST_DEPARTMENT}/teachers`);
        expect(response.statusCode).toBe(404);
    });
})
