import React, { Component } from 'react'


export default class Demo1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num:0
        }
    }
    componentDidMount() {
        this.props.store.subscrible(()=> {
            this.forceUpdate()
        })
    }
    add =() => {
        this.props.store.dispatch(dispatch=> {
            setTimeout(()=> {
               dispatch({type:'add',data:10})
            },2000)
        })
        // this.props.store.dispatch({type:'add',data:10})
        // setTimeout(()=> {
        //     this.props.store.dispatch({type:'add',data:10})
        // },2000)
        
    }
    incre =() => {
        this.props.store.dispatch({type:'incre',data:10})
    }
    render() {
        const {num} = this.props.store.getState()
        return (
            <div>
                <div>{num}</div>
                <button onClick={this.add}>+</button>
                <button onClick={this.incre}>-</button>
            </div>
        )
    }
}
