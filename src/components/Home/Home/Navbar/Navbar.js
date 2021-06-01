import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart  } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <Link to="/">
                <img className="img-fluid navbar-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="navbar-search">
                <input type="text" className="navbar-searchInput" placeholder="Search For Products" />
                <FontAwesomeIcon className="navbar-searchIcon" icon={faSearch} />
            </div>
            <div className="header-nav">
                <Link to="/login" className="nav-link">
                    <div className="navbar-option">
                        <span className="navbar-option-one">Hello, Enam</span>
                        <span className="navbar-option-two">Sing In</span>
                    </div>
                </Link>
                <Link to="/login" className="nav-link">
                    <div className="navbar-option">
                        <span className="navbar-option-one">Returns</span>
                        <span className="navbar-option-two"> & Orders</span>
                    </div>
                </Link>
                <Link to="/login" className="nav-link">
                    <div className="navbar-option">
                        <span className="navbar-option-one">Your </span>
                        <span className="navbar-option-two">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="navbar-basket">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span> 0</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;