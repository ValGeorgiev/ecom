import React, { Fragment } from 'react'
import styles from './styles.module.css'
import ProductCard from '../product-card'
import Header from '../header'
import logged from '../logged'
import data from '../data'

const renderCards = (products) => {
  return products.map(product => {
    return (
      <Fragment key={product.id}>
        {logged(ProductCard, product)}
      </Fragment>
    )
  })
}

class ProductList extends React.Component {
  state = {
    isRed: false,
    ownerName: "" 
  }

  handleClick = () => {
    this.setState({
      isRed: !this.state.isRed
    })
  }

  render() {
    const themeClass = this.state.isRed ? styles.redContainer : styles.container
    return (
      <Fragment>
        <Header />
        <div>
          {this.state.ownerName}
        </div>
        <button onClick={this.handleClick}>Toggle Red Theme</button>
        <div className={themeClass} red={this.state.isRed}>
          {renderCards(data)}
        </div>
      </Fragment> 
    )
  }
}

export default ProductList
