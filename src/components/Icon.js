import React, { Component } from 'react'

class Icon extends Component {
  render() {
    return (
      <img
        src={'https://s2.coinmarketcap.com/static/img/coins/64x64/' + this.props.icon + '.png'}
      />
    )
  }
}

export default Icon
