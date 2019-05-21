import React, { Component } from 'react'

class coin extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.symbol}</p>
        <p>{this.props.price}</p>}
      </div>
    )
  }
}

export default coin
