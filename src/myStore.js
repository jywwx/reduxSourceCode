const store = {
    state: {
        num: 0,
        num:1
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