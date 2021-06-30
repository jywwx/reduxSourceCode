function createStore(reducer, enchancer) { // reduce 处理state的初始值 以及以纯函数的形式 改变state的状态
    if (enchancer) {
        return enchancer(createStore)(reducer)
    }
    let currentState = undefined
    currentState = reducer(currentState, { type: 'INIT' })

    const Listenrs = []

    function getState() {
        return currentState
    }

    function dispatch(action) {
        currentState = reducer(currentState, action)
        Listenrs.map(item => item())
    }

    function subscrible(f) {
        Listenrs.push(f)
    }
    return { getState, dispatch, subscrible }
}

function enchancer(fun) {
    return function(reducer) {
        let result = fun(reducer)
        let dispatch = function(action) {
            if (typeof action === 'function') {
                action(result.dispatch)
            } else {
                result.dispatch(action)
            }
        }
        return {...result, dispatch }
    }
}

function compose(...funs) {
    if (funs.length === 0) {
        return arg => arg
    }
    if (funs.length === 1) {
        return funs[0]
    }
    return funs.reduce((a, b) => (...args) => a(b(...args)))
}

function applyMiddleWare(...middlewares) {
    return createStore => reducer => {
        let store = createStore(reducer)
        let dispatch = store.dispatch
        var chain = []

        var middlewareAPI = {
            getState: store.getState,
            dispatch: action => dispatch(action)
        }

        chain = middlewares.map(middleware => middleware(middlewareAPI))
        dispatch = compose(...chain)(store.dispatch)
        return {...store, dispatch }
    }
}
export { createStore, enchancer, applyMiddleWare };