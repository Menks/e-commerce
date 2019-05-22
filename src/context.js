import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'
const ProductContext = React.createContext()
//provider 
//consumer

export default class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],  
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,

    }
    componentDidMount(){
      this.setProducts()
    }
    setProducts = ()=>{
      let tempProducts= []
      storeProducts.forEach(product=>{
        const singleProduct ={...product}
        tempProducts=[...tempProducts,singleProduct]
      })
      this.setState(()=>{
        return {products:tempProducts}
      })
    }
    getItem=(id)=>{
      const product = this.state.products.find(item=>item.id===id)
      return product;
    }
    handleDetail = (id)=>{
      const product = this.getItem(id)
      this.setState(()=>{
        return  { detailProduct:product}
      })
    }
    addToCart = (id)=>{
     // console.log('add to card with id:', id);
     let tempProduct = [...this.state.products]
     const index = tempProduct.indexOf(this.getItem(id))
     const product = tempProduct[index];
     product.inCart = true;
     product.count=1;
     const price = product.price;
     product.total=price;
     this.setState(()=>{
       return {
         products:tempProduct,cart:[...this.state.cart,product]
       }
     },()=>{this.addTotals()})
    }
    openModal = (id)=>{
      const product = this.getItem(id)
      this.setState(()=>{
        return {
          modalProduct:product,modalOpen:true
        }
      })

    }
    closeModal=()=>{
      this.setState(()=>{
        return{
          modalOpen:false
        }
      })
    }

    increment=(id)=>{
      let tempCart = [...this.state.cart]
      let selectedProduct = tempCart.find(product=>product.id==id)
      const index = tempCart.indexOf(selectedProduct)
      const product = tempCart[index]
      product.count=product.count+1;
      product.total=product.price*product.count
      this.setState(()=>{
        return {
          cart:[...tempCart]
        }
      },()=>this.addTotals())
    }
    decrement=(id)=>{
      let tempCart = [...this.state.cart]
      let selectedProduct = tempCart.find(item=>item.id==id);
      const index = tempCart.indexOf(selectedProduct)
      const product = tempCart[index];
      product.count=product.count-1;
      if(product.count>0){
      product.total=product.price*product.count;
      this.setState(()=>{
        return{
          cart:[...tempCart]
        }
      },this.addTotals())
    }else{
      this.removeItem(id)
    }
    }
    removeItem=(id)=>{
      //console.log('remove item')
      let tempProducts = [...this.state.products]
      let tempCart = [...this.state.cart]
      tempCart = tempCart.filter(item=>item.id!==id)
      let index  = tempProducts.indexOf(this.getItem(id))
      let removedProduct = tempProducts[index]
      removedProduct.inCart=false;
      removedProduct.cout=0;
      removedProduct.total=0;
      this.setState(()=>{
        return{
          cart:[...tempCart],
          products:[...tempProducts]
        }
      },()=>this.addTotals()
      )
    }
    clearCart= ()=>{
      console.log('cleare cart');
      this.setState(()=>{
        return{
          cart:[]
        }},this.setProducts(),
           this.addTotals())
    }
    addTotals = ()=>{
      let  subTotal = 0 ;
      this.state.cart.map(item=>(subTotal += item.total))
      const tempTax = subTotal*0.1;
      const tax = parseFloat(tempTax.toFixed(2));
      console.log(tax)
      const total = subTotal + tax
      this.setState(()=>{
        return {
          cartSubTotal:subTotal,
          cartTax:tax,
          cartTotal:total
          
        }
      })

    }

  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state, 
          handleDetail:this.handleDetail,
          addToCart:this.addToCart,
          getItem:this.getItem,
          openModal:this.openModal,
          closeModal:this.closeModal,
          increment:this.increment,
          decrement:this.decrement,
          removeItem:this.removeItem,
          clearCart:this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer,ProductProvider}