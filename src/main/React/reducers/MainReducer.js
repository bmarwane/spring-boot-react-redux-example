import {Map} from 'immutable'

export default function MainReducer(state = Map(), action) {
    switch(action.type) {

        case 'SET_STATE':
            return setState(state, action.state)

        default:
            return state
    }
}

function setState(state, newState) {
    return state.merge(newState)
}