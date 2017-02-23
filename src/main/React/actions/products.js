import request from 'axios'

import { PRODUCTS_SAVED, AJAX_BEGIN, AJAX_END, PRODUCTS_ALL } from 'actions/actionTypes'

export function saveProduct(productToSave) {

    return function(dispatch){
        dispatch({ type: AJAX_BEGIN })

        return request.post('/api/products/save', productToSave )
            .then(function(response){
                dispatch({ type: PRODUCTS_SAVED, saved : response.data })
                dispatch({ type: AJAX_END })
            })
            .catch(function(response){
                dispatch({ type: AJAX_END })
            })
    }
}

export function loadAllProducts() {

    return function(dispatch){
        dispatch({ type: AJAX_BEGIN })

        return request.get('/api/products/all' )
            .then(function(response){
                dispatch({ type: PRODUCTS_ALL, products : response.data })
                dispatch({ type: AJAX_END })
            })
            .catch(function(response){
                dispatch({ type: AJAX_END })
            })
    }
}