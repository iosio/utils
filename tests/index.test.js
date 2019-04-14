import React from 'react'
import renderer from 'react-test-renderer';

import Component from '../src'

describe('Component', () => {

    it('renders without crashing', () => {
        const tree = renderer.create(
            <Component/>
        );

        expect(tree).toMatchSnapshot();
    })
});

