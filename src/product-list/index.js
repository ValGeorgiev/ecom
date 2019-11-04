import React, { Fragment } from 'react'
import ProductCard from '../product-card'
import Header from '../header'
import './styles.css'

function ProductList({ product }) {

  return (
    <Fragment>
      <Header />
      <div className="container">
        <ProductCard {...product} />
      </div>
    </Fragment>
  )
}

export default ProductList
