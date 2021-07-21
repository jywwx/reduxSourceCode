const store = {
    state: {
        num: 0,
        num:1,
<<<<<<< HEAD
        num:5,
        num:6
=======
        num:5
>>>>>>> b4ce1bc0ca6f5d3f95d355a7a0e1eb6444f39639
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