const expect = require('chai').expect
const request = require('supertest-as-promised')

const app = require('../app')

describe('express', () => {

    it('responds to / with index.html', () => {
        return request(app)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .then(res => expect(res.text).to.contain('<div id="app"></div>'))
    })
})
