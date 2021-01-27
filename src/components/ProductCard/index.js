/* eslint-disable */
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';
import { addProduct } from './../../redux/Cart/cart.actions'; 
import Button from './../../components/forms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)
import './styles.scss';

const mapState = state => ({
    product: state.productsData.product
  });

const ProductCard = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { productID } = useParams();
    const { product } = useSelector(mapState);

    const {
        productThumbnail,
        productName,
        productPrice,
        productDesc,
        productOrigin,
        productTasteNote
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


    const configAddToBagBtn = {
      type: 'button'
    }

    const handleAddToCart = (product) => {
      if (!product) return;
      dispatch(
        addProduct(product)
      );
      history.push('/bag');
    }

    return (
        <div className="productCard">
          <div className="detailHero">
            <img src={productThumbnail} />
          </div>
          <div className="productDetails">
            <ul>
              <li>
                <h1>
                  {productName}
                </h1>
              </li>
              <li>
                <span>
                ฿{productPrice}
                </span>
              </li>
              <li>
              <span>
                {productOrigin}
              </span>
              </li>
              <li>
                <span>
                {productTasteNote}
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
                <span
                className="desc"
                dangerouslySetInnerHTML={{ __html: productDesc }} />
              </li>
            </ul>
          </div>
        </div>
    );
}

export default ProductCard;