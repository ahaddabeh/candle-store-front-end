import React from 'react'
// import Link from 'next/link'

export default function Product() {
    return (
        <div>
            <div className="row mx-auto bg-light mt-5">

                <div className="col-6 d-flex justify-content-end">
                    <img src="candle1.jpg" alt="" />
                </div>
                <div className="col-6">
                    <div className="card" style={{ width: "44rem" }}>
                        <div className="card-body">
                            <h3 className="card-title mb-4">Some Scented Candle</h3>
                            <strong>
                                <h4 className="card-subtitle mb-2">$12.00</h4>
                            </strong>
                            <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                            adipisci rem iusto? Quae reprehenderit magnam iure adipisci ea quibusdam quisquam illum
                        officiis, odit nam odio vitae praesentium amet dolorem exercitationem.</p>
                            <div className="row">
                                <div className="col-6">
                                    <p>Wick Type:</p>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected value="1">Single Wick</option>
                                        <option value="2">Triple Wick</option>
                                        <option value="3">Wood Wick</option>
                                    </select>
                                </div>
                                <div className="col-6">
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
                                        <button className="btn btn-warning text-light">Add to cart <i
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
