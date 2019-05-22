import React, { Component } from 'react'
import Icon from './Icon'
class Coin extends Component {
  render() {
    return (
      <div className="info">
        {console.log(this)}
        <div className="icon">
          <Icon icon={this.props.icon} />
        </div>
        <h3>{this.props.name}</h3>
        <p>{this.props.symbol}</p>
        <p>{this.props.price}</p>
      </div>
    )
  }
}

export default Coin
