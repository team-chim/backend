const request = require('supertest');
const app = require('../../app');

const STUDENTS = require('../../config/students_mock.js')
const EXIST_STUDENT = STUDENTS.EXIST_STUDENT;
const NON_EXIST_STUDENT = STUDENTS.NON_EXIST_STUDENT;

const EXIST_YEAR = 2016;
const EXIST_SEMESTER = 2;

describe('Get all students - /v2/students', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/v2/students');
        expect(response.statusCode).toBe(200);
    });
})

describe('Get a specific student - /v2/students/:stuid', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get all register subjects of a student - /v2/students/:stuid/registered', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/registered`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/registered`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get all register subjects of a student in a year - /v2/students/:stuid/registered/:year', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/registered/${EXIST_YEAR}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/registered/${EXIST_YEAR}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get all register subjects of a student in a semester - /v2/students/:stuid/registered/:year/:semester', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/registered/${EXIST_YEAR}/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/registered/${EXIST_YEAR}/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get the study schedule of a student - /v2/students/:stuid/schedules/study/:year/:semester', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/schedules/study/${EXIST_YEAR}/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/schedules/study/${EXIST_YEAR}/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get the midterm schedule of a student - /v2/students/:stuid/schedules/midterm/:year/:semester', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/schedules/midterm/${EXIST_YEAR}/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/schedules/midterm/${EXIST_YEAR}/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get the final schedule of a student - /v2/students/:stuid/schedules/final/:year/:semester', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/schedules/final/${EXIST_YEAR}/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/schedules/final/${EXIST_YEAR}/${EXIST_SEMESTER}`);
        expect(response.statusCode).toBe(404);
    });
})