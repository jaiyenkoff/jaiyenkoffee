import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, addProduct, reduceCartItem } from './../../../redux/Cart/cart.actions'

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMinus, faTimesCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add( far, fab, faMinus, faTimesCircle, faPlus)


const Item = (product) => {
    const dispatch = useDispatch();
    const {
        productName,
        productThumbnail,
        productPrice,
        quantity,
        documentID
    } = product;

    const handleRemoveCartItem = (documentID) => {
        dispatch(
            removeCartItem({
                documentID
            })
        );
    }

    const handleAddProduct = (product) => {
        dispatch(
            addProduct(product)
        )
    }

    const handleReduceItem = (product) => {
        dispatch(
            reduceCartItem(product)
        )
    }

    return (
        <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
            <tbody>
                <tr>
                    <td>
                        <img src={productThumbnail} alt={productName} />
                    </td>
                    <td>
                        {productName}
                    </td>
                    <td class="inc">
                        <span class="icon" onClick={() => handleReduceItem(product)}>
                            <FontAwesomeIcon icon="minus" />
                        </span>
                        <span>
                            {quantity}
                        </span>
                        <span class="icon" onClick={() => handleAddProduct(product)}>
                            <FontAwesomeIcon icon="plus" />
                        </span>
                    </td>
                    <td>
                        ฿{productPrice}
                    </td>
                    <td align="center">
                    <span className="icon" onClick={() => handleRemoveCartItem(documentID)}>
                    <FontAwesomeIcon icon={["far", "times-circle"]} />
                    </span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Item;