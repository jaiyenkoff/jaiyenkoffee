import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, fetchProductsStart, deleteProductStart } from './../../redux/Products/products.actions'
import Modal from './../../components/Modal';
import FormInput from './../../components/forms/FormInput';
import FormSelect from './../../components/forms/FormSelect';
import Button from './../../components/forms/Button';
import CloseButton from './../../components/forms/CloseButton';



import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});  

const Admin = props => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('togo');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productTasteNote, setProductTasteNote] = useState('');
  const [productOrigin, setProductOrigin] = useState('');
  const [productStock, setProductStock] = useState(0);

  useEffect(() => {
    dispatch(
      fetchProductsStart()
    ); 
  }, []);

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  };

const resetForms = () => {
  setHideModal(true);
  setProductCategory('togo');
  setProductName('');
  setProductThumbnail('');
  setProductPrice(0);
  setProductOrigin('');
  setProductTasteNote('');
  setProductStock(0);
}

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productOrigin,
        productTasteNote,
        productStock
      })
    );
    resetForms();
  };

  return (
    <div className="admin">

      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>
              Add new product
            </Button>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="column">
            <h2>
              Add new product
            </h2>
            </div>
            <div className="column">
            <CloseButton onClick={() => toggleModal()}>
              X
            </CloseButton>
            </div>
            </div>
            <FormSelect
              label="Category"
              options={[{
                value: "togo",
                name: "To-go"
              }, {
                value: "crafted",
                name: "Handcrafted"
              }]}
              handleChange={e => setProductCategory(e.target.value)}
            />

            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={e => setProductName(e.target.value)}
            />

            <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={e => setProductThumbnail(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={e => setProductPrice(e.target.value)}
            />

            <FormInput
              label="Origin"
              type="text"
              value={productOrigin}
              handleChange={e => setProductOrigin(e.target.value)}
            />

            <FormInput
              label="Taste Note"
              type="text"
              value={productTasteNote}
              handleChange={e => setProductTasteNote(e.target.value)}
            />

            <FormInput
              label="Stock"
              type="number"
              min="0"
              max="10000"
              step="1"
              value={productStock}
              handleChange={e => setProductStock(e.target.value)}
            />


            <Button type="submit">
              Add product
            </Button>

          </form>
        </div>
      </Modal>
    <div className="manageProducts">

              <table border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <th>
                      <h1>
                        Manage Products
                      </h1>
                    </th>
                  </tr>
                  <tr>
                    <td>
                    <table className="results" border="0" cellPadding="10" cellSpacing="0">
                        <tbody>
                              {products.map((product, index) => {
                                const {
                                  productName,
                                  productThumbnail,
                                  productPrice,
                                  productOrigin,
                                  productTasteNote,
                                  productStock,
                                  documentID
                                } = product;
                                
                                return (
                                  <tr>
                                    <td className="thumb">
                                    <img src={productThumbnail} alt="" />
                                    </td>
                                    <td>
                                      <p>{productName}</p>
                                      </td>
                                      <td>
                                      <p>฿{productPrice}</p>
                                      </td>
                                      <td>
                                      <p>{productOrigin}</p>
                                      </td>
                                      <td>
                                      <p>{productTasteNote}</p>
                                      </td>
                                      <td>
                                      <p>{productStock}</p>
                                    </td>
                                    <td>
                                      <Button onClick={()=> dispatch(deleteProductStart(documentID))}>
                                        Remove
                                      </Button>
                                    </td>
                                  </tr>
                                )
                              })}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

    </div>
    </div>
  );
}

export default Admin;