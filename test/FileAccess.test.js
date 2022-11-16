const { HttpStatusCode } = require('axios')
const request = require('supertest')
const app = require('../server')
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('Upload file', () => {
    it('Check authenitcation of upload file end point', async () => {
        const res = await request(app)
            .post('/file')
            .set({ 'token': 'In valid token', Accept: 'application/json' })
            .send({
                "title": "Test2",
                "description": "Test2",
                "date": "Test2"
            })
        expect(res.statusCode).toEqual(401)

    })
})

describe('Get All files endpoint', () => {
    it('Check authenitcation of get all files end ponit', async () => {
        const res = await request(app)
            .get('/file')
            .set({ 'token': 'In valid token', Accept: 'application/json' })
        expect(res.statusCode).toEqual(401)

    })
})

describe('Get file by id', () => {
    it('Check authenitcation of get file by id endpoint', async () => {
        const res = await request(app)
            .get('/file/sdadas')
            .set({ 'token': 'In valid token', Accept: 'application/json' })
        expect(res.statusCode).toEqual(401)

    })
})

describe('Delete file by id', () => {
    it('Check authenitcation of delete file by id endpoint', async () => {
        const res = await request(app)
            .delete('/file/dasdasd')
            .set({ 'token': 'In valid token', Accept: 'application/json' })
        expect(res.statusCode).toEqual(404)

    })
})

// //Check authorization for endpoints
// describe('Get All files endpoint', () => {
//     it('Check authenitcation of get all files end ponit', async () => {
//         const res = await request(app)
//             .get('/file')
//             .set({ 'token': 'eyJ4NXQiOiJPRGRtWlRJNE9HUmlNakk1WkdFMVl6TmtNRFEyTURSa016Z3pZbVE1TmpBMFlXWTJNekU0WkRBeFptWTJORFE1TTJRek16Y3daRFkzTWprMU1qYzVPQSIsImtpZCI6Ik9EZG1aVEk0T0dSaU1qSTVaR0UxWXpOa01EUTJNRFJrTXpnelltUTVOakEwWVdZMk16RTRaREF4Wm1ZMk5EUTVNMlF6TXpjd1pEWTNNamsxTWpjNU9BX1JTMjU2IiwidHlwIjoiYXQrand0IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNjE0YjM0Yi1jNDA4LTRjNjAtOWNiYS1iNWVjOTA3OGQ3YWQiLCJhdXQiOiJBUFBMSUNBVElPTl9VU0VSIiwiYmluZGluZ190eXBlIjoic3NvLXNlc3Npb24iLCJpc3MiOiJodHRwczpcL1wvYXBpLmFzZ2FyZGVvLmlvXC90XC9zbGlpdDk4XC9vYXV0aDJcL3Rva2VuIiwiY2xpZW50X2lkIjoiejRWY3Z4ckFBRWIxQWZDcndGcEp2cHRhajhFYSIsImF1ZCI6Ino0VmN2eHJBQUViMUFmQ3J3RnBKdnB0YWo4RWEiLCJuYmYiOjE2Njg1OTgxMjUsImF6cCI6Ino0VmN2eHJBQUViMUFmQ3J3RnBKdnB0YWo4RWEiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIiwiZXhwIjoxNjY4NjAxNzI1LCJpYXQiOjE2Njg1OTgxMjUsImJpbmRpbmdfcmVmIjoiMzZlMjA4MDJmYTYwMTNhODA4ZTlkYWFkNGQxNDNmMjAiLCJqdGkiOiJlMTVhODZlNi00NTcyLTRmZWYtYWZkMi0wMDlmMTVhZmM3M2IiLCJ1c2VybmFtZSI6InRoYXJpbmR1dWRhbmE2NkBnbWFpbC5jb20ifQ.OlzP55T2c-XL0LdNK80h3wBjDiZJC49KM5l7DpbN0mJ-q_J_fEjdrvAiaUjmA5XQDlM_4FNy7qxQXOf24JG9fvD-iz4k1jndXzAW0GHR10Fjs79-pxegNe-jQIKWPeKXU8eZabEglyU3HAP3K8nDZilEJL_cOai4X7YlZpFgwfmXvtD18Oqw1dEdI13_cq9M2pH2H_s3daZn8h1UWODiOZz-J8_vsqQAV8R9OrjcH5e8g5an8a6TG7LFSXrcZt4Mvr99okSBGrOAib-JvJ_p2NRuRlhDszdl3QRiYYKdH9Py06iPAzqGNWfVRQO-fF1giIIfrfTCU5sgM2HVLvxRVQ', Accept: 'application/json' })
//         expect(res.statusCode).toEqual(401)

//     })
// })
