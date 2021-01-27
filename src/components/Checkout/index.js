import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cart.selectors';
import { createStructuredSelector } from'reselect';

import './styles.scss';

// components
import Button from './../forms/Button';
import Item from './Item';

const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const CheckOut = ({}) => {
    const history = useHistory();
    const { cartItems, total } = useSelector(mapState);

    const errMsg = 'You have no item in your bag. We hope you find something you like. :)';

    return (
        <div className="checkout">
            <h1>
                Checkout your order
            </h1>
        <div className="cart">
        {cartItems.length > 0 ? (
        <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>

                <tr>
                <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                <tbody>
                <tr>
                    <th>
                        Menu
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Remove
                    </th>
                </tr>
                </tbody>
                 </table>  
                </tr>

                <tr>
                    <table border="0" cellPadding="0" cellSpacing="0">
                        <tbody>
                            {cartItems.map((item, pos) => {
                                return (
                                    <tr key={pos}>
                                        <td>
                                            <Item {...item} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </tr>

                <tr>
                    <table align="right" border="0" cellSpacing="0" cellPadding="10">
                            <tr align="right">
                                <td>
                                    <h3>
                                        Total: ฿{total}
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <table border="0" cellSpacing="0" cellPadding="10">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Button onClick={() => history.goBack()}> 
                                                    Continue Shopping
                                                </Button>
                                            </td>
                                            <td>
                                                <Button>
                                                    Checkout
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </tr>
                    </table>
                </tr>

            </tbody>
        </table>
        ) : (
            <p>
                {errMsg}
            </p>
        )}   
        </div>
        </div>
    );
}; 

export default CheckOut;