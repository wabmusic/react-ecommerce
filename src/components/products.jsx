import React, { Component } from 'react';
import Product, { products } from '../models/product';
import { addItem, CartItems } from '../models/cart';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : products
        };
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(item) {
        addItem(item);
        console.log(CartItems);
    }

    render() { 
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th/>
                            <th>
                                Name
                            </th>
                            <th>
                                Description
                            </th>
                            <th style={{textAlign:"right"}}>
                                Price
                            </th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map( item => 
                            <tr>
                                <td>
                                    <img className="img-fluid" src={item.img} alt={item.name} style={{maxWidth: "50px"}}/>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.description}
                                </td>
                                <td style={{textAlign:"right"}}>
                                    ${item.price}
                                </td>
                                <td>
                                    <button className="btn btn-outline-secondary" type="button" onClick={ () => this.addToCart(item)}>Add to cart</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Products;