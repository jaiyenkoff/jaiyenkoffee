/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import Product from './Product';
import FormSelect from './../forms/FormSelect';
import './styles.scss';

const mapState = ({ productsData }) => ({
    products: productsData.products
});

const ProductResults = ({ }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { filterType } = useParams();
    const { products } = useSelector(mapState);

    useEffect(() => {
        dispatch(
            fetchProductsStart( { filterType })
        )
    },[filterType]);

    const handleFilterChange = (e) => {
        history.push(`/search/${e.target.value}`)
      };

if (!Array.isArray(products)) return null;

if (products.length < 1) {
    return (
        <div className="products">
            <p>No Results</p>
        </div>
    );
}  

    const configFormSelect = {
        options: [{
            name: 'Show All',
            value: ''
        }, {
            name: 'To-go',
            value: 'togo'
        }, {
        name: 'Handcrafted',
        value: 'crafted'
    }],
        defaultValue: filterType,
        handleChange: handleFilterChange
    };

    return (
        <div className="products">
            <div>
            <h1>
                Our Menu {filterType}
            </h1>
            </div>

            <FormSelect {...configFormSelect} />

            <div className="producctResults">    
            {products.map((product, pos) => {
               const { productThumbnail, productName, productPrice } = product;
               if (!productThumbnail || !productName || 
                typeof productPrice === 'undefined') return null;

                const configProduct = {
                    productThumbnail, 
                    productName, 
                    productPrice
                };

               return (
                <Product {...configProduct} />
                )
            })}
        </div>
        </div>
    );
};

export default ProductResults;