import chai from 'chai'
const expect = chai.expect
import React from 'react'
import renderer from 'react-test-renderer'
import App from '../src/modules/App'

test('App', () => {

    it('should exist', () => {
        const App = require('../src/modules/App.js')
        expect(App).to.be.defined
    })

    it('should render a div', () => {
        const component = renderer.create(
            <App />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

})
