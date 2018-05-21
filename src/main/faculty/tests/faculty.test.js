const request = require('supertest');
const app = require('../../../app');

const MOCK = require('../../../config/mock');
const EXIST_FACULTY = MOCK.EXIST_FACULTY;
const NON_EXIST_FACULTY = MOCK.NON_EXIST_FACULTY;
const EXIST_FACULTY_GROUP = MOCK.EXIST_FACULTY_GROUP;
const NON_EXIST_FACULTY_GROUP = MOCK.NON_EXIST_FACULTY_GROUP;

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

describe('Get all faculty groups - /v2/faculty_groups', () => {
    test(`It should response the GET method`, async () => {
        const response = await request(app).get(`/v2/faculty_groups`);
        expect(response.statusCode).toBe(200);
    });
})

describe('Get a specific faculty group - /v2/faculty_groups/:fgid', () => {
    test(`It should response the GET method on exist [fgid = ${EXIST_FACULTY_GROUP}]`, async () => {
        const response = await request(app).get(`/v2/faculty_groups/${EXIST_FACULTY_GROUP}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [fgid = ${NON_EXIST_FACULTY_GROUP}]`, async () => {
        const response = await request(app).get(`/v2/faculty_groups/${NON_EXIST_FACULTY_GROUP}`);
        expect(response.statusCode).toBe(404);
    });
})