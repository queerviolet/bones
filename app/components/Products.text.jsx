import React from 'react'
import chai, {expect} from 'chai'                                                   
chai.use(require('chai-enzyme'))
import {shallow} from 'enzyme'

import {Products} from './Products'

describe('<ProductsContainer />', () => {
  let root
  beforeEach('render the container', () =>
    root = shallow(<Products/>)
  )

  it('Displays a welcome header', () => {
    expect(root.find('h1')).to.have.length(1)
  })

  it('displays a table', () => {
    expect(root.find('table[type="productsList"]')).to.have.length(1)
  })
})