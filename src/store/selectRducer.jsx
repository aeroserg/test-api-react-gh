
const defaultState = {
    option: 'Income',
    hidden: true,
    inputVal: '',
    areaVal: ''
}

export default function selectReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_TYPE_PAYMENT':
            return {...state, option: action.payload};
        case 'SET_HIDDEN':
            return {...state, hidden: action.payload};
        case 'CHANGE_INPUT_VALUE':
            return {...state, inputVal: action.payload};
        case 'CHANGE_TEXTAREAINPUT_VALUE':
            return {...state, areaVal: action.payload};
        default:
            return state;
    }
}