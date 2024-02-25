
const defaultState = {
    id: 0
}

export default function categoryPicker(state = defaultState, action) {
    switch(action.type) {
        case 'SET_ACTIVE':
            return {...state, id: action.payload};
        default:
            return state;
    }
}