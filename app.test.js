const app = require('./app');
var request = require("supertest");
test('It should response the GET method', (done) => {
    request(app).get('/').then((response) => {
        expect(response.text).toBe('tt1099212');
        done();
    });
}, 10000);