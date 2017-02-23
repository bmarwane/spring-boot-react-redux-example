import {Map} from 'immutable'
import { PRODUCTS_SAVED, PRODUCTS_ALL } from 'actions/actionTypes'

export default function productReducer(state = Map(), action) {
    switch(action.type) {

        case PRODUCTS_SAVED:
            return state.merge({
                saved: action.saved
            })

        case PRODUCTS_ALL:
            return state.merge({
                products: action.products
            })

        default:
            return state
    }
}