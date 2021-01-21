import { takeLatest, all, call,put } from 'redux-saga/effects';
import { auth } from './../../firebase/utils';
import { setProducts, fetchProductsStart } from './products.actions';
import { handleAddProduct, handleFetchProducts, handleDeleteProduct } from './products.helpers';
import productsTypes from './products.types';

export function* addProduct({ payload: {
    productCategory,
    productName,
    productThumbnail,
    productPrice,
    productOrigin,
    productTasteNote,
    productStock
}}) {
    try {
        const timestamp = new Date();
        yield handleAddProduct({
            productCategory,
            productName,
            productThumbnail,
            productPrice,
            productOrigin,
            productTasteNote,
            productStock,
            productAdminUID: auth.currentUser.uid,
            createdDate: timestamp
        }); 

        yield put(
            fetchProductsStart()
        );


    } catch (err) {
        // console.log(err);
    }
}

export function* onAddProductStart() {
    yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct)
} 

export function* fetchProducts({ payload }) { 
    try {
        const products = yield handleFetchProducts( payload );
        yield put(
            setProducts(products)
        ) ;
    } catch (err) {
        // console.log(err);
    }
}

export function* onFetchProductsStart() {
    yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* deleteProduct({ payload }) {
try {
    yield handleDeleteProduct(payload);
    yield put (
        fetchProductsStart()
    );
} catch (err) {
    // console.log(err);
}
} 

export function* onDeleteProductStart() {
    yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct)
}

export default function* productsSaga() {
    yield all([
        call(onAddProductStart),
        call(onFetchProductsStart),
        call(onDeleteProductStart)
    ])
}

