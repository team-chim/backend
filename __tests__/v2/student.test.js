const request = require('supertest');
const app = require('../../app');

const MOCK = require('../../config/mock.js')
const EXIST_STUDENT = MOCK.EXIST_STUDENT;
const NON_EXIST_STUDENT = MOCK.NON_EXIST_STUDENT;
const NEW_UNDERGRAD = MOCK.NEW_UNDERGRAD;
const NEW_GRAD = MOCK.NEW_GRAD;
const OLD_STUDENT = MOCK.OLD_STUDENT;

const EXIST_YEAR = 2016;
const EXIST_SEMESTER = 2;

const INTERN_YEAR = 2016;

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

describe('Get the internships of a student - /v2/students/:stuid/internships', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/internships`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/internships`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get the internships of a student in a year - /v2/students/:stuid/internships/:year', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/internships/${INTERN_YEAR}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/internships/${INTERN_YEAR}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get the official internship of a student - /v2/students/:stuid/official_internship', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/official_internship`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/official_internship`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get the reports of a student - /v2/students/:stuid/official_internship/reports', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/official_internship/reports`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/official_internship/reports`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get a specific report of a student - /v2/students/:stuid/official_internship/reports/:repno', () => {
    test(`It should response the GET method on exist [stuid = ${EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${EXIST_STUDENT}/official_internship/reports/2`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [stuid = ${NON_EXIST_STUDENT}]`, async () => {
        const response = await request(app).get(`/v2/students/${NON_EXIST_STUDENT}/official_internship/reports/2`);
        expect(response.statusCode).toBe(404);
    });
})

/// PUT ///

// describe('Insert an undergrad - /v2/students/undergrad', () => {
    
//     beforeEach(() => {
//         MOCK.resetStudentTable();
//     });

//     test(`It should response the PUT method on exist [stuid = ${NEW_UNDERGRAD}]`, async () => {
//         const response = await request(app).put(`/v2/students/undergrad/${NEW_UNDERGRAD}`);
//         expect(response.statusCode).toBe(202);
//     });

//     afterEach(() => {
//         MOCK.resetStudentTable();
//     })
// })

// describe('Insert a grad - /v2/students/grad', () => {
    
//     beforeEach(() => {
//         MOCK.resetStudentTable();
//     });

//     test(`It should response the PUT method on exist [stuid = ${NEW_GRAD}]`, async () => {
//         const response = await request(app).put(`/v2/students/grad/${NEW_GRAD}`);
//         expect(response.statusCode).toBe(202);
//     });

//     afterEach(() => {
//         MOCK.resetStudentTable();
//     })
// })



// router.put('/students/undergrad', require('../controllers/put_new_undergrad'));
// router.put('/students/grad', require('../controllers/put_new_grad'));
// router.get('/students/:stuid', require('../controllers/get_student_details'));
// router.delete('/students/:stuid', require('../controllers/delete_student'));