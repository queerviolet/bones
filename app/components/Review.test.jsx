import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme'))
import {shallow} from 'enzyme'

import Review from './Review'

let reviewForm;

beforeEach('render the root', () =>
    reviewForm = shallow(<Review />)
)
