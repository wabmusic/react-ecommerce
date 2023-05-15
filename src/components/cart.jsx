import React, { Component } from 'react';
import { CartItems, increment, decrement, remove, isEmpty, totalPrice } from '../models/cart';

class Cart extends Component {
    state = { 

    } 
    render() { 
        return (
            <div className="container">
                <div id="active-cart" hidden={isEmpty()}>
                    <h3 style={{textAlign:"center"}}>View Cart</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th/>
                                <th>Name</th>
                                <th style={{textAlign:"right"}}>Price</th>
                                <th style={{textAlign:"right"}}>Quantity</th>
                                <th style={{textAlign:"right"}}>Edit Quantity</th>
                                <th style={{textAlign:"right"}}>Total</th>
                                <th style={{textAlign:"right"}}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CartItems.map(item =>
                                <tr id={"row"+item.product.description}>
                                    <td>
                                        <img className="img-fluid" src={item.product.img} alt={item.product.name} style={{maxWidth: "50px"}}/>
                                    </td>
                                    <td>
                                        {item.product.name}
                                    </td>
                                    <td style={{textAlign:"right"}}>
                                        ${item.product.price}
                                    </td>
                                    <td id={"qty"+item.product.description} style={{textAlign:"right"}}>
                                        {item.quantity}
                                    </td>
                                    <td style={{textAlign:"right"}}>
                                        <button id={"dec"+item.product.description} type="button" className="btn btn-danger" onClick={() => decrement(item)} >-</button>
                                        <button type="button" className="btn btn-primary" onClick={() => increment(item)}>+</button>
                                    </td>
                                    <td id={"total"+item.product.description} style={{textAlign:"right"}}>
                                        ${(item.product.price * item.quantity).toFixed(2)}
                                    </td>
                                    <td style={{textAlign:"right"}}>
                                        <button type="button" className="btn btn-danger" onClick={() => remove(item)}>x</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div style={{textAlign:"right"}}>
                        <h5>Sub-total:</h5>
                        <span id="sub-total" className="text">${totalPrice()}</span>
                    </div>
                </div>
                <div id="empty-cart" style={{textAlign:"center"}} hidden={!isEmpty()}>
                    <h5>Your cart is empty.</h5>
                </div>
            </div>
        );
    }
}
 
export default Cart;