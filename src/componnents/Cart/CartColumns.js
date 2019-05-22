import React from 'react'

export default function CartColumns(props) {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
         <div className="col-10 mx-auto col-lg-2">
           <p>Product</p>
         </div>
         <div className="col-10 mx-auto col-lg-2">
           <p>Name of Product</p>
         </div>
         <div className="col-10 mx-auto col-lg-2">
           <p>Price</p>
         </div>
         <div className="col-10 mx-auto col-lg-2">
           <p>quantity</p>
         </div>
         <div className="col-10 mx-auto col-lg-2">
           <p>Remove</p>
         </div>
         <div className="col-10 mx-auto col-lg-2">
           <p>Total</p>
         </div>
      </div>
    </div>
  )
}
