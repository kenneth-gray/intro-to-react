import React, { Component } from 'react'

import colourBlockStyle from './colour-block-style'

const startColour = 'crimson'

class ColourBlock2 extends Component {
  constructor () {
    super()

    this.state = {
      backgroundColor: startColour
    }

    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter () {
    this.setState({
      backgroundColor: 'deeppink'
    })
  }

  onMouseLeave () {
    this.setState({
      backgroundColor: startColour
    })
  }

  render () {
    const style = {
      ...colourBlockStyle,
      backgroundColor: this.state.backgroundColor
    }

    return (
      <div style={style}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      />
    )
  }
}

export default ColourBlock2
