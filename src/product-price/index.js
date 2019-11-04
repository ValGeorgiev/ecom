import React from 'react'
import PropTypes from 'prop-types'
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

ProductPrice.defaultProps = {
  price: 0
}

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired
}

export default ProductPrice