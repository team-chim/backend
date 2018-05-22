const request = require('supertest');
const app = require('../../../app');

const MOCK = require('./mock');
const EXIST_COMPID = 3;
const NON_EXIST_COMPID = 9999;
const EXIST_BRID = 2;
const NON_EXIST_BRID = 4444;


describe('Get all companies - /v2/companies', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/v2/companies');
        expect(response.statusCode).toBe(200);
    });
})

describe('Get a specific company - /v2/companies/:compid', () => {
    test(`It should response the GET method on exist [compid = ${EXIST_COMPID}]`, async () => {
        const response = await request(app).get(`/v2/companies/${EXIST_COMPID}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [compid = ${NON_EXIST_COMPID}]`, async () => {
        const response = await request(app).get(`/v2/companies/${NON_EXIST_COMPID}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get all branches of a company - /v2/companies/:compid/branches', () => {
    test(`It should response the GET method on exist [compid = ${EXIST_COMPID}]`, async () => {
        const response = await request(app).get(`/v2/companies/${EXIST_COMPID}/branches`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [compid = ${NON_EXIST_COMPID}]`, async () => {
        const response = await request(app).get(`/v2/companies/${NON_EXIST_COMPID}/branches`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get a branch of a company - /v2/companies/:compid/branches/:brid', () => {
    test(`It should response the GET method on exist [compid = ${EXIST_COMPID}]`, async () => {
        const response = await request(app).get(`/v2/companies/${EXIST_COMPID}/branches/${EXIST_BRID}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [compid = ${NON_EXIST_COMPID}]`, async () => {
        const response = await request(app).get(`/v2/companies/${NON_EXIST_COMPID}/branches/${EXIST_BRID}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get the reviews of a company - /v2/companies/:compid/reviews', () => {
    test(`It should response the GET method on exist [compid = ${EXIST_COMPID}]`, async () => {
        const response = await request(app).get(`/v2/companies/${EXIST_COMPID}/reviews`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [compid = ${NON_EXIST_COMPID}]`, async () => {
        const response = await request(app).get(`/v2/companies/${NON_EXIST_COMPID}/reviews`);
        expect(response.statusCode).toBe(404);
    });
})

/// PUT ///

describe('Insert a company - /v2/companies', () => {
    
    beforeEach((done) => {
        MOCK.resetCompanyTable(done);
    });

    test(`It should response the PUT method on exist [comp name = ${MOCK.NEW_VALID_COMPANY.NameEN}]`, async () => {
        const response = await request(app).put(`/v2/companies`).send(MOCK.NEW_VALID_COMPANY);
        expect(response.statusCode).toBe(202);
    });

    test('It should response the PUT method on missing parameter [NameEN]', async() => {
        const response = await request(app).put(`/v2/companies`);
        expect(response.statusCode).toBe(422);
    })

    afterEach((done) => {
        MOCK.resetCompanyTable(done);
    })
})

describe('Insert a company branch - /v2/companies/:compid/branches', () => {
    
    beforeEach((done) => {
        MOCK.resetBranchTable(done);
    });

    test(`It should response the PUT method on exist [branch_name = ${MOCK.NEW_VALID_COMPANY_BRANCH.BranchName}]`, async () => {
        const response = await request(app).put(`/v2/companies/${MOCK.NEW_VALID_COMPANY_BRANCH.CompanyID}/branches`).send(MOCK.NEW_VALID_COMPANY_BRANCH);
        expect(response.statusCode).toBe(202);
    });

    test('It should response the PUT method on missing parameter [*]', async() => {
        const response = await request(app).put(`/v2/companies/${MOCK.NEW_VALID_COMPANY_BRANCH.CompanyID}/branches`);
        expect(response.statusCode).toBe(422);
    })

    afterEach((done) => {
        MOCK.resetBranchTable(done);
    })
})