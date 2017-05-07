import React from 'react'

export default (props) => (
  <div>
    <div>
      <label>Name: </label>
      <span>{ props.name }</span>
    </div>
    <div>
      <label>Email: </label>
      <span>{ props.email }</span>
    </div>
  </div>
)
