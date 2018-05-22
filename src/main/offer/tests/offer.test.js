const request = require('supertest');
const app = require('../../../app');

const MOCK = require('./mock');
const EXIST_OFFER = {
    CompanyID: 1,
    Year: 2016,
    OfferID: 1
};

const NON_EXIST_OFFER = {
    CompanyID: 99,
    Year: 2050,
    OfferID: 999
};

// GET //

describe('Get all offers - /v2/internship/offers', () => {
    test(`It should response the GET method`, async () => {
        const response = await request(app).get(`/v2/internship/offers`);
        expect(response.statusCode).toBe(200);
    });
})

describe('Get offers by company - /v2/internship/offers/:compid', () => {
    test(`It should response the GET method on exist [compid = ${EXIST_OFFER.CompanyID}]`, async () => {
        const response = await request(app).get(`/v2/internship/offers/${EXIST_OFFER.CompanyID}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [compid = ${NON_EXIST_OFFER.CompanyID}]`, async () => {
        const response = await request(app).get(`/v2/internship/offers/${NON_EXIST_OFFER.CompanyID}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get offers by year - /v2/internship/offers', () => {
    test(`It should response the GET method on exist [year = ${EXIST_OFFER.Year}]`, async () => {
        const response = await request(app).get(`/v2/internship/offers?year=${EXIST_OFFER.Year}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [year = ${NON_EXIST_OFFER.Year}]`, async () => {
        const response = await request(app).get(`/v2/internship/offers?year=${NON_EXIST_OFFER.Year}`);
        expect(response.statusCode).toBe(404);
    });
})

describe('Get offers by company and year - /v2/internship/offers/:compid', () => {
    test(`It should response the GET method on exist [compid = ${EXIST_OFFER.CompanyID}, year = ${EXIST_OFFER.Year}]`, async () => {
        const response = await request(app).get(`/v2/internship/offers/${EXIST_OFFER.CompanyID}?year=${EXIST_OFFER.Year}`);
        expect(response.statusCode).toBe(200);
    });

    test(`It should response the GET method on not exist [compid = ${NON_EXIST_OFFER.CompanyID}, year = ${NON_EXIST_OFFER.Year}]`, async () => {
        const response = await request(app).get(`/v2/internship/offers/${NON_EXIST_OFFER.CompanyID}?year=${NON_EXIST_OFFER.Year}`);
        expect(response.statusCode).toBe(404);
    });
})