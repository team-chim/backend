const request = require('supertest');
const app = require('../../../app');

const MOCK = require('./mock');


describe('Get all academic years - /v2/academic/years', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/v2/academic/years');
        expect(response.statusCode).toBe(200);
    });
})

describe('Get a specific academic year - /v2/academic/years/:year', () => {
    test(`It should response the GET method on exist [year = ${MOCK.EXIST_ACADEMIC_YEAR}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${MOCK.EXIST_ACADEMIC_YEAR}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [year = ${MOCK.NON_EXIST_ACADEMIC_YEAR}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${MOCK.NON_EXIST_ACADEMIC_YEAR}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get all academic semesters of a year - /v2/academic/years/:year/semesters', () => {
    test(`It should response the GET method on exist [year = ${MOCK.EXIST_ACADEMIC_YEAR}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${MOCK.EXIST_ACADEMIC_YEAR}/semesters`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [year = ${MOCK.NON_EXIST_ACADEMIC_YEAR}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${MOCK.NON_EXIST_ACADEMIC_YEAR}/semesters`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get a academic semester of a year - /v2/academic/years/:year/semesters/:semester', () => {
    test(`It should response the GET method on exist [year = ${MOCK.EXIST_ACADEMIC_YEAR}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${MOCK.EXIST_ACADEMIC_YEAR}/semesters/${MOCK.EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [year = ${MOCK.NON_EXIST_ACADEMIC_YEAR}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${MOCK.NON_EXIST_ACADEMIC_YEAR}/semesters/${MOCK.EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(404);
    });

    test(`It should response the GET method on not exist [semester = ${MOCK.NON_EXIST_SEMESTER}]`, async () => {
        const response = await request(app).get(`/v2/academic/years/${MOCK.EXIST_ACADEMIC_YEAR}/semesters/${MOCK.NON_EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(404);
    });
})

// PUT //

describe('Insert an academic year - /v2/academic/years', () => {
    
    beforeEach((done) => {
        MOCK.resetAcademicYearTable(done);
    });

    test(`It should response the PUT method on exist [year = ${MOCK.NEW_VALID_ACADEMIC_YEAR.year}]`, async () => {
        const response = await request(app).put(`/v2/academic/years`).send(MOCK.NEW_VALID_ACADEMIC_YEAR);
        expect(response.statusCode).toBe(202);

        // Test Duplicate
        const response_dup = await request(app).put(`/v2/academic/years`).send(MOCK.NEW_VALID_ACADEMIC_YEAR);
        expect(response_dup.statusCode).toBe(400);
    });

    test('It should response the PUT method on missing parameter [year]', async() => {
        const response = await request(app).put(`/v2/academic/years`);
        expect(response.statusCode).toBe(422);
    })

    afterEach((done) => {
        MOCK.resetAcademicYearTable(done);
    })
})

describe('Insert an academic semester - /v2/academic/years/:year/semesters', () => {
    
    beforeEach((done) => {
        MOCK.resetSemesterTable(done);
    });

    test(`It should response the PUT method on exist [year = ${MOCK.NEW_VALID_SEMESTER.year}]`, async () => {
        const response = await request(app).put(`/v2/academic/years/${MOCK.NEW_VALID_SEMESTER.year}/semesters`).send(MOCK.NEW_VALID_SEMESTER);
        expect(response.statusCode).toBe(202);

        // Test Duplicate
        const response_dup = await request(app).put(`/v2/academic/years/${MOCK.NEW_VALID_SEMESTER.year}/semesters`).send(MOCK.NEW_VALID_SEMESTER);
        expect(response_dup.statusCode).toBe(400);
    });

    test('It should response the PUT method on missing parameter [*]', async () => {
        console.log(`/v2/academic/years/${MOCK.NEW_VALID_SEMESTER.year}/semesters`);
        const response = await request(app).put(`/v2/academic/years/${MOCK.NEW_VALID_SEMESTER.year}/semesters`);
        expect(response.statusCode).toBe(422);
    })

    afterEach((done) => {
        MOCK.resetSemesterTable(done);
    })
})

