const inital = {
    num: 0
}

function firtsReducer(state = inital, action) {
    switch (action.type) {
        case 'add':
            const newNum = state.num + action.data
            return Object.assign({}, state, { num: newNum })
        case 'incre':
            const newmum = state.num - action.data
            return Object.assign({}, state, { num: newmum })
        default:
            return state
    }
}
export default firtsReducer