import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ProductList from './product-list'
import data from './data'

ReactDOM.render(<ProductList product={data[0]} />, document.getElementById('root'))
