import React from 'react'
import Radium from 'radium'

import colourBlockStyle from './colour-block-style'

const style = {
  ...colourBlockStyle,
  backgroundColor: 'royalblue',
  ':hover': {
    backgroundColor: 'deepskyblue'
  }
}

const ColourBlock3 = () => (
  <div style={style} />
)

export default Radium(ColourBlock3)
