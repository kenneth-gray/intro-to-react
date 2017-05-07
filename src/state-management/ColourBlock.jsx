import React, { Component } from 'react'

const colours = ['crimson', 'royalblue', 'gold', 'darkmagenta', 'forestgreen', 'darkorange', 'deepskyblue', 'deeppink']

const style = {
  cursor: 'pointer',
  height: 200,
  width: 200
}

class ColourBlock extends Component {
  constructor () {
    super()

    this.state = {
      colourIndex: 0
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.setState({
      colourIndex: (this.state.colourIndex + 1) % colours.length
    })
  }

  render () {
    const colourBlockStyle = {
      ...style,
      backgroundColor: colours[this.state.colourIndex]
    }

    return (
      <div style={colourBlockStyle} onClick={this.onClick} />
    )
  }
}

export default ColourBlock
