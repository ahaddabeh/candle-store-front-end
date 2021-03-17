import React, { useEffect } from 'react'
import Link from 'next/link'
import { shoppingList } from './shopping/shopping-list'
import { useAppContext } from '../src/contexts/ApplicationContext'

const CreateShoppingCard = ({ item }) => {
    const { toggleTheme, dispatch, state } = useAppContext();
    return (
        <div className="card-body border">
            <div>
                <div className="row row-cols-2">
                    <div className="col-md">
                        <Link style={{ textDecoration: "none" }} href={`products/${item.id}`}><h5 className="text-info">{item.name}</h5></Link>
                    </div>
                    <div className="col-md d-flex justify-content-end">
                        <p className="mx-1"><small>{item.price}</small></p>
                        <input type="text" placeholder="2" className="form-control mx-1" style={{ width: "10%" }}
                            id="quantity2" aria-describedby="quantityHelp2" />
                        <p className="mx-1"><strong>{item.price * 2}</strong></p>
                    </div>
                </div>
                <div className="col-9">
                    <p className="card-text" style={{ fontSize: "0.8rem" }}>There are many variations of
                                        passages of Lorem Ipsum available</p>
                    <p className="card-text mb-n1" style={{ fontSize: "0.8rem" }}><strong>Description
                                            lists</strong></p>
                    <p className="card-text" style={{ fontSize: "0.8rem" }}>List is perfect for defining
                                        terms.</p>
                    <div className="row mx-auto">
                        <button className="btn btn-secondary btn-sm text-light" style={{ fontSize: "0.8rem", width: "17%" }} onClick={() => {
                            dispatch({ type: "REMOVE_ITEM", payload: item.id })
                        }}>Remove Item <i
                            className="fas fa-trash-alt"></i></button>
                    </div>

                </div>
            </div>

        </div>)
}

const createShoppingList = (items) => items.map(item => <CreateShoppingCard item={item} />)

const getTotal = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}

export default function ShoppingCart() {
    const { toggleTheme, dispatch, state } = useAppContext();
    toggleTheme();
    useEffect(() => {
        dispatch({ type: "INCREMENT", payload: 1 })
        const cartTotal = getTotal(state.items);
        dispatch({ type: "TOTAL", payload: cartTotal });
    }, [])
    return (
        <div className="container">
            <div className="row wrapper border-bottom white-bg page-heading m-4">
                <h2>E-commerce shopping cart</h2>
            </div>
            <div className="row mx-auto">
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-header">
                            <div className="row row-cols-2">
                                <div className="col">
                                    Items in your cart
                                </div>
                                <div className="col">
                                    <p className="float-right">(<strong>{state.items.length}</strong>) items</p>
                                </div>
                            </div>
                        </div>

                        {/* {shoppingList.map(item => <CreateShoppingCard item={item} />)} */}
                        {createShoppingList(state.items)}
                        <div className="card-body border">
                            <div>
                                <div className="row row-cols-2">
                                    <div className="col">
                                        <Link href='/'>
                                            <button className="btn btn-light border">Continue Shopping <i
                                                className="fa fa-arrow-right"></i></button>
                                        </Link>
                                    </div>
                                    <div className="col d-flex justify-content-end">
                                        <Link href='/checkout'>
                                            <button type="button" className="btn btn-info">Checkout <i
                                                className="fas fa-shopping-cart"></i></button>
                                        </Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            Cart Summary
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">Total</h6>
                            <h2 className="card-text border-bottom mb-3">${state.total}</h2>
                            <p style={{ fontSize: "0.8rem" }} className="text-muted">
                                *For United States, France and Germany applicable sales tax will be applied
                            </p>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Link href="/checkout">
                                    <button type="button" className="btn btn-info">Checkout <i className="fas fa-shopping-cart"></i></button>
                                </Link>
                                <button type="button" className="btn btn-light border">Cancel</button>

                            </div>
                        </div>
                    </div>
                    <div className="card my-4">
                        <div className="card-header">
                            Support
                        </div>
                        <div className="card-body text-center">
                            <h4><i className="fas fa-phone"></i>+43 100 783 001</h4>

                            <p style={{ fontSize: "0.8rem" }} className="text-muted">
                                Please contact with us if you have any questions. We are avalible 24h.
                            </p>

                        </div>
                    </div>
                    <div className="card my-4">
                        <div className="card-header">
                            <p style={{ fontSize: "0.9rem" }}>Products you may be interested in</p>
                        </div>
                        <div className="card-body border">
                            <h5>Product 1</h5>
                            <p style={{ fontSize: "0.8rem" }} className="text-muted">
                                Many desktop publishing packages and web page editors now.</p>
                            <button type="button" className="btn btn-sm btn-outline-info">Info <i
                                className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                        <div className="card-body border">
                            <h5>Product 2</h5>
                            <p style={{ fontSize: "0.8rem" }} className="text-muted">
                                Many desktop publishing packages and web page editors now.</p>
                            <button type="button" className="btn btn-sm btn-outline-info">Info <i
                                className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
