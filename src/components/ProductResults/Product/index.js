import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import  { useDispatch }  from 'react-redux';
import { addProduct } from './../../../redux/Cart/cart.actions';

// button
import Button from './../../forms/Button';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faExternalLinkAlt)

const Product = (product) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { 
        documentID,
        productThumbnail, 
        productName, 
        productPrice
    } = product;
    if (!documentID || !productThumbnail || !productName ||
        typeof productPrice === 'undefined') return null;
        
    const configAddToBagBtn = {
        type: 'button'
    };

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(
            addProduct(product)
        );
        history.push('/bag')
    };
    
    const configLinemanBtn = {
        type: 'button'
    };
    return (
        <div className="product">
            <div className="thumb">
                <Link to={`/product/${documentID}`}>
                <img src={productThumbnail} alt={productName} />
                </Link>
            </div>
            <div className="details">
                <ul>
                    <li>
                    <span className="name">
                    <Link to={`/product/${documentID}`}>
                        {productName}
                    </Link>
                    </span>
                    </li>
                    <li>
                    <span className="price">
                    ฿{productPrice}
                    </span>
                    </li>
                    <li>
                        <div className="addToBag">
                        <Button {...configAddToBagBtn} onClick={() => handleAddToCart(product)}>
                            Add to bag
                        </Button>
                        </div>
                    </li>
                    <li>
                        <div className="lineman">
                        <Button {...configLinemanBtn}>
                           <a href="https://www.wongnai.com/delivery/businesses/715820IL/order"> 
                           Order with LINEMAN
                           </a>
                           <span className="icon">
                            <FontAwesomeIcon icon="external-link-alt" />
                            </span>
                        </Button>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

export default Product;