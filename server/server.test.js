const request = require('supertest');

var app = require('./server').app;
const expect = require('expect');

describe("Server", () => {

    describe("GET /", () => {
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
        })

    });

    describe("GET /users", () => {


        it('should return users array', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude(
                        { name: "Anand", age: 25 }
                    )
                })
                .end(done);
        })
    })

})

