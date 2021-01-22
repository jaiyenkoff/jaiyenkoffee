/* eslint-disable */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';
import './styles.scss';

const mapState = state => ({
    product: state.productsData.product
  });

const ProductCard = ({}) => {
    const dispatch = useDispatch();
    const { productID } = useParams();
    const { product } = useSelector(mapState);

    const {
        productThumbnail,
        productName,
        productPrice,
      } = product;
    useEffect(() => {
        dispatch(
            fetchProductStart(productID)
        )
        return () => {
            dispatch(
              setProduct({})
            )
          }
      
        }, []);

    return (
        <div className="productCard">
         <h1>
            {productName}
         </h1>
        </div>
    );
}

export default ProductCard;