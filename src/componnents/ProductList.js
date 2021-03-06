import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
//import {storeProducts} from '../data'
import {ProductConsumer} from '../context'
export default class ProductList extends Component {
 
  render() {
    
    return (
      <React.Fragment>
        <div className="container">
        <Title name="our" title="Product"/>
         <div className="row">
        <ProductConsumer>
          {value=>{
            return value.products.map(product=>(
              <Product key={product.id} product={product}/>
              ))
            }}
        </ProductConsumer>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
