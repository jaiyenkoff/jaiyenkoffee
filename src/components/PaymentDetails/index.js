import React, { useState } from 'react';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';
import { CountryDropdown } from 'react-country-region-selector';
import './styles.scss';

const initialAddressState = {
    line1: '',
    line2: '',
    district: '',
    province: '',
    postal_code: '',
    phone_number: '',
    country: '',
}

const PaymentDetails = () => {

    const [shippingAddress, setShippingAddress] = useState({...initialAddressState});
    const [recipientName, setRecipientName] = useState('');

    const handleShipping = evt => {
        const { name, value } = evt.target;
        setShippingAddress({
            ...shippingAddress,
            [name]: value
        })
    }

    const handleFormSubmit = async evt => {
        evt.preventDefault();
    };

    return (
        <div className="paymentDetails">
            <form onSubmit={handleFormSubmit}>

                <div className="group">
                    <h2>
                        Shipping Address
                    </h2>
                </div>

                <FormInput
                    placeholder="Recipient Name"
                    name="recipientName"
                    handleChange={evt => setRecipientName(evt.target.value)}
                    value={recipientName}
                    type="text"
                />
                
                <FormInput
                    placeholder="Address Line 1"
                    name="line1"
                    handleChange={evt => handleShipping(evt)}
                    value={shippingAddress.line1}
                    type="text"
                />

                <FormInput
                    placeholder="Address Line 2"
                    name="line2"
                    handleChange={evt => handleShipping(evt)}
                    value={shippingAddress.line2}
                    type="text"
                />

                <FormInput
                    placeholder="District"
                    name="district"
                    handleChange={evt => handleShipping(evt)}
                    value={shippingAddress.district}
                    type="text"
                />

                <FormInput
                    placeholder="Province"
                    name="province"
                    handleChange={evt => handleShipping(evt)}
                    value={shippingAddress.province}
                    type="text"
                />

                <FormInput
                    placeholder="Postal Code"
                    name="postal_code"
                    handleChange={evt => handleShipping(evt)}
                    value={shippingAddress.postal_code}
                    type="number"
                />

                <FormInput
                    placeholder="Phone No."
                    name="phone_number"
                    handleChange={evt => handleShipping(evt)}
                    value={shippingAddress.phone_number}
                    type="number"
                />

                <div className="formRow checkoutInput">
                <CountryDropdown 
                    onChange={val => handleShipping({
                        target: {
                        name: 'country',
                        value: val
                        }
                    })}
                    value={shippingAddress.country}
                    valueType="short"
                />
                </div>

                <div className="group">
                    <h2>
                        Payment Details
                    </h2>
                </div>

            </form>
        </div>
    )
}

export default PaymentDetails;