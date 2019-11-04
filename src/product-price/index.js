import React from 'react'
import './styles.css'

const ProductPrice = ({ price }) => {
  return (
    <p className="product-price">
      Price: 
      <span>
        {price}$
      </span>
    </p>
  )
}

export default ProductPrice