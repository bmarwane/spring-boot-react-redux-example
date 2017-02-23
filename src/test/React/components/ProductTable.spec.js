import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import {List, Map} from 'immutable';

import ProductTable from '../../../main/React/components/products/ProductTable'

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag} = TestUtils;


describe('ProductTable', () => {

    it('Renders list of elements', () => {
        // given
        const products = List.of(
            Map({id: 1, name: 'product1'}),
            Map({id: 2, name: 'product2'})
        );


        // when

        const component = renderIntoDocument(
            <ProductTable products={products} />
        );

        // then
        const items = scryRenderedDOMComponentsWithTag(component, 'tr');
        expect(items.length).to.equal(2 + 1); // 1 for header
    })

})