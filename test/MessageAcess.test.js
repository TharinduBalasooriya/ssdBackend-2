const { HttpStatusCode } = require('axios')
const request = require('supertest')
const app = require('../server')


describe('Add new message', () => {
    it('Check authenitcation of add new message end point', async () => {
        const res = await request(app)
            .post('/message')
            .set({ 'token': 'In valid token', Accept: 'application/json' })
            .send({
                "title": "Test2",
                "description": "Test2",
                "date": "Test2"
            })
        expect(res.statusCode).toEqual(401)

    })
})

describe('Get All messages endpoint', () => {
    it('Check authenitcation of get all messages end ponit', async () => {
        const res = await request(app)
            .get('/message')
            .set({ 'token': 'In valid token', Accept: 'application/json' })
        expect(res.statusCode).toEqual(401)

    })
})

describe('Get message by id', () => {
    it('Check authenitcation of get message by id endpoint', async () => {
        const res = await request(app)
            .get('/message/6374a5a6b9ed08fce6832810')
            .set({ 'token': 'In valid token', Accept: 'application/json' })
        expect(res.statusCode).toEqual(401)

    })
})


describe('Delete message by id', () => {
    it('Check authenitcation of delete message by id endpoint', async () => {
        const res = await request(app)
            .delete('/message/dasdasd')
            .set({ 'token': 'In valid token', Accept: 'application/json' })
        expect(res.statusCode).toEqual(401)

    })
})


