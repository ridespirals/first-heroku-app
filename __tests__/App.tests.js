const chai = require('chai')
const expect = chai.expect

describe('App', () => {

    it('should exist', () => {
        const App = require('../src/modules/App.js')
        expect(App).to.be.defined
    })
})
