
const now = new Date();

const today = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`

const defaultState = {
    hidden: true,
    currentDate: today
}

export default function dateReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_DATE':
            return {...state, currentDate: action.payload};
        case 'SET_DATE_HIDDEN':
            return {...state, hidden: action.payload};
        default:
            return state;
    }
}