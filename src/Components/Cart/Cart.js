import React from 'react';

const Cart = (props) => {
    const items=props.list;
    const total = items.reduce((total,product) => total+product.price,0);
    let shippingAndHandling = 0.0;
    if(total<5000) shippingAndHandling = total*0.2;
    shippingAndHandling.toFixed(2);
    return (
        <div>
            <h5>Order Preview</h5>
            <hr/>
            <p className="text-center font-weight-bold text-dark" >Items Ordered: {items.length}</p>
            <br/>
            <div className="row px-2 mb-2">
                <div className="col-8 pl-0 text-left">
                    <p className="my-0"><small>Total:</small></p>
                    <p className="my-0"><small>Shipping & Handling:</small></p>
                    <p className="my-0"><small>Total before tax:</small></p>
                    <p className="my-0"><small>Estimated Tax:</small></p>
                </div>
                <div className="col-2 text-left">
                    <p className="my-0"><small>${total.toFixed(2)}</small></p>
                    <p className="my-0"><small>${shippingAndHandling.toFixed(2)}</small></p>
                    <p className="my-0"><small>${(total+shippingAndHandling).toFixed(2)}</small></p>
                    <p className="my-0"><small>${((total+shippingAndHandling)*0.1.toFixed(2)).toFixed(2)}</small></p>
                </div>
            </div>
            <h4 className="text-danger font-weight-bolder">Order Total: &nbsp; &nbsp; ${((total+shippingAndHandling)*0.1+total+shippingAndHandling).toFixed(2)}</h4>
            <button className="btn btn-sm mt-2 font-weight-bold py-2 btn-warning border border-dark">Review your order</button>
        </div>
    );
};

export default Cart;