var React = require('react')

var Counter1 = React.createClass({
  getInitialState: function () {
    return {
      counter: 0,
      color: 'red'
    }
  },

  render: function () {
    var style = { color: this.state.color }

    return (
      <div style={style}>
        { this.state.counter }
      </div>
    )
  },

  componentDidMount: function () {
    function increaseCounter () {
      this.setState({
        counter: this.state.counter + 1
      })
    }

    this.interval = setInterval(increaseCounter.bind(this), 1000)
  },

  componentWillUnmount: function () {
    clearInterval(this.interval)
  }
})

module.exports = Counter1
