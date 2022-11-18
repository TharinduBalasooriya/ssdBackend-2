
const { addMessageService } = require('../src/service/messageService')
//const {jest} = require('@jest/globals')

jest.setTimeout(10000);
test('Test Add message function', async () => {
  
    let testMessage = {
        "title": "Test2",
        "description": "Test2",
        "date": "Test2"
    }
    let res = await addMessageService(testMessage)
    expect(res).toBe(true);
})