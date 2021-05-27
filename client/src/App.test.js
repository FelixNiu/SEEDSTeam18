import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
const ShowArticleList = require('./components/ShowArticleList');


describe('<ShowArticleList />', () => {
    const wrapper = shallow(<ShowArticleList />);
    it('it should find 6 div tags', () => {
        expect(wrapper.find('div')).tobe(6);
    });

    it('should find 1 h1 tag', () => {
        expect(wrapper.find('h1')).tobe(1);
    });
    it('should find 2 Link tags', () => {
        expect(wrapper.find('Link')).tobe(2);
    });
});