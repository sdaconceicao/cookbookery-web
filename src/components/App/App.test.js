import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {mount, shallow} from 'enzyme';
import {App} from './App';

describe('App', ()=> {

    function setup(){
        const props = {
            children: {}
        };
        return shallow(<App {...props} />);
    }

    it('renders without crashing', () => {
        const wrapper = setup();
    });
});
