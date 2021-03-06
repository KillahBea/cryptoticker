import React, { Component } from 'react'
import Coin from './Coin'
class CryptoData extends Component {
  state = {
    cryptoCurrencies: []
  }
  componentDidMount() {
    this.getCryptoDataFromApi()
    setInterval(this.getCryptoDataFromApi, 10000)
  }
  getCryptoDataFromApi = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=20')
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        // console.log(json)
        this.setState({
          cryptoCurrencies: Object.values(json.data)
        })
        // console.log(Object.values(json.data))
      })
  }

  render() {
    return (
      <>
        <div className="coin">
          {this.state.cryptoCurrencies.map(currency => {
            return (
              <>
                <Coin
                  icon={currency.id}
                  name={currency.name}
                  symbol={currency.symbol}
                  price={currency.quotes.USD.price}
                />
              </>
            )
          })}
        </div>
      </>
    )
  }
}

export default CryptoData
