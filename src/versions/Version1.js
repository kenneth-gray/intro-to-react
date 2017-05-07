var React = require('React')

var Version1 = React.createClass({
  render: function () {
    return React.createElement('div', null,
      React.createElement('h1', null, 'Version 1'),
      React.createElement('p', null, 'ES5 only')
    )
  }
})

module.exports = Version1
