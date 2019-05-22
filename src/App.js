import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// from package 
import {Switch,Route} from 'react-router-dom'
// component  
import Navbar from './componnents/Navbar'
import Cart from './componnents/Cart/Cart'
import Modal from './componnents/Modal'
//import Product from './componnents/Product'
import ProductList from './componnents/ProductList'
import Details from './componnents/Details'
import Default from './componnents/Default'
import "bootstrap/dist/css/bootstrap.min.css"
class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Navbar/>
       <Switch>
         <Route exact  path="/" component={ProductList}/>
         <Route path="/details" component={Details}/>
         <Route path="/cart" component={Cart}/>
         
         <Route component={Default}/>
       </Switch>
       <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
