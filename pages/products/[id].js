import React from 'react'
import { useRouter } from 'next/router'
import { products } from './product-data/product-data'
import { useAppContext } from '../../src/contexts/ApplicationContext'
const findProductDetails = (productList, id) => {
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].id === +id) {
            return productList[i]
        }
    }
}

export default function Product() {
    const { dispatch, state } = useAppContext();
    const router = useRouter();
    const { id } = router.query;
    // console.log(props);
    const product = findProductDetails(products, id);
    console.log(product, id);
    return (
        <div className="container">
            <div className="row mx-auto mt-5">

                <div className="col-md-6 d-flex justify-content-end">
                    <img src="..." alt="" />
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title mb-4">{product.name}</h3>
                            <strong>
                                <h4 className="card-subtitle mb-2">{product.price}</h4>
                            </strong>
                            <h4>Ingredients:</h4>
                            <ul>
                                {product.ingredients.map(ingredient => <li className="card-text text-muted">{ingredient}</li>)}
                            </ul>

                            <div className="row">
                                <div className="col-md-6">
                                    <p>Wick Type:</p>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected value="1">Single Wick</option>
                                        <option value="2">Triple Wick</option>
                                        <option value="3">Wood Wick</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <p>Size:</p>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected value="1">Small (3 oz)</option>
                                        <option value="2">Medium (9.7 oz)</option>
                                        <option value="3">Large (25.1 oz)</option>
                                    </select>
                                </div>
                            </div>
                            <p className="mt-2">Quantity:</p>
                            <div className="row d-flex">
                                <div className="col-3">

                                    <select className="form-select" aria-label="Default select example">
                                        <option selected value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <div className="col-9">
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-warning text-light" onClick={() => {
                                            dispatch({ type: "ADD_ITEM", payload: product })
                                        }}>Add to cart <i
                                            className="fa fa-shopping-cart"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <small><strong>SKU:</strong> #994587623</small>
                            </div>
                            <div className="row">
                                <small><strong>Categories:</strong> Candle, Scent, Home</small>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <button className="btn btn-light text-danger"><i className="fa fa-heart"></i> Save to
                                Wishlist</button>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <h6 className="text-muted mt-2">Share: <i className="fa fa-facebook-square"></i> <i
                                        className="fa fa-twitter-square"></i> <i className="fa fa-google-plus-square"></i></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}