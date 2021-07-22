const store = {
    state: {
        num: 0,
        num:1,
        num:5,
        num:6,

        commit:'测试soft提交',
        commit:"测试mixed提交"
    },
    add() {
        this.state.num = this.state.num + 1
        this.publish()
    },
    ince() {
        this.state.num = this.state.num - 1
        this.publish()
    },
    listeners: [],
    subscrible(fun) {
        this.listeners.push(fun)
    },
    publish() {
        this.listeners.map(item => item())
    }
}
export default store