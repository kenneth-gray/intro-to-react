import React, { Component } from 'react'

class Counter2 extends Component {
  constructor () {
    super()

    this.state = {
      color: 'green',
      counter: 0
    }
  }

  render () {
    const style = { color: this.state.color }

    return (
      <div style={style}>
        { this.state.counter }
      </div>
    )
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }
}

export default Counter2
