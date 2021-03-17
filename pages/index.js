// import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import { products } from './products/product-data/product-data'

const CreateProductCard = ({ product }) => (
    <div className="col my-2">
        <div className="card mx-2 text-center bg-light" >
            <img src={`/product-images/${product.image}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <Link href={`products/${product.id}`}><button className="btn btn-sm btn-warning">View Product</button></Link>
            </div>
        </div>
    </div>
)

const ProductFilter = ({ title, count }) => (
    <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" />
        <label className="form-check-label">
            {title} <span className="text-secondary">({count})</span>
        </label>
    </div>
)

const ProductList = () => {
    console.log(products)
    console.log(typeof window !== "undefined")
    // console.log(sessionStorage);
    return (
        <div>
            <div className="container mt-5">
                <div className="row mx-auto">
                    <div className="col-md-3">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h6>Product Categories</h6>
                                <ProductFilter title="Food" count="59" />
                                <ProductFilter title="Floral" count="23" />
                                <ProductFilter title="Fruity" count="61" />
                                <ProductFilter title="Woody" count="72" />
                                <ProductFilter title="Fresh" count="47" />
                            </div>
                        </div>
                        <div className="card mt-4 bg-light">
                            <div className="card-body">
                                <h6>Filter By Price</h6>
                                <ProductFilter title="Less than $10" count="43" />
                                <ProductFilter title="$10-$20" count="60" />
                                <ProductFilter title="More than $20" count="11" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row mx-auto p-3 bg-light">
                            <div className="col-6 d-flex justify-content-start">
                                <button type="button" className="btn btn-warning btn-sm mx-2"><i
                                    className="fa fa-th-large"></i></button>
                                <button type="button" className="btn btn-warning btn-sm mx-2"><i className="fa fa-list"></i></button>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <div className="dropdown">
                                    <button style={{ color: "white" }} className="btn dropdown-toggle text-dark" type="button"
                                        id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort by Popularity
                            </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-md-3 row-cols-sm-1">

                            {products.map(product => <CreateProductCard product={product} />)}
                        </div>

                        <div className="row mx-auto mt-3">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination  d-flex justify-content-center">
                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList