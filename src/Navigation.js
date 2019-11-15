import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ProductList from './product-list'
import ProductPage from './product-page'
import ErrorPage from './error-page'

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:id" component={ProductPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default Navigation