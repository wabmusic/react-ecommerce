import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className="sticky-top" style={{zIndex: "0"}}>
                    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
                        <div className="container-fluid">
                            <a className="navbar-brand" href="">ECommerce</a>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="products">Products</Link>
                                    </li>
                                </ul>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div>
                                <Link type="button" className="btn btn-outline-success" to="cart">View Cart</Link>
                            </div>
                            <div>
                                <Link type="button" className="btn btn-primary" to="login">Login</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
 
export default Navbar;