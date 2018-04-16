const request = require('supertest');

var app = require('./server').app;
const expect = require('expect');

it('should return hello world response', (done) => {
    // request(app)
    //     .get('/')
    //     .expect(404)
    //     .expect({
    //         error: 'Page Not Found'
    //     })
    //     .end(done);
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page Not Found'
            });
        })
        .end(done);
});