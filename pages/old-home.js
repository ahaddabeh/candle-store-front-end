import React from 'react'
import Link from 'next/link'
import Header from '../src/components/layout/bootstrap-head'
import Nav from '../src/components/layout/nav'
import Footer from '../src/components/layout/footer'
export default function index() {
    return (
        <div>
            <main class="container">

                <div class="starter-template text-center py-5 mt-2">
                    <h1 style={{ fontFamily: "Dancing Script, cursive;" }}>Lighthouse</h1>
                    <h2>Our popular products</h2>
                    <p class="lead">Use this document as a way to quickly start any new project.<br /> All you get is this text
                and a mostly barebones HTML document.</p>
                </div>
                <div class="row mx-auto mb-5 d-flex justify-content-center">
                    <div class="card mx-2" style={{ width: "18rem;" }}>
                        <img style={{ height: "200px;" }} src="candle1.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's
                        content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card mx-2" style={{ width: "18rem;" }}>
                        <img style={{ height: "200px;" }} src="candle2.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's
                        content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card mx-2" style={{ width: "18rem;" }}>
                        <img style={{ height: "200px;" }} src="candle3.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's
                        content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <hr class="mb-5" />
                <div class="row mx-auto mt-5">
                    <div class="col-6">
                        <div class="row mx-auto">
                            <h3 class="d-flex justify-content-start">The Services</h3>
                        </div>
                        <div class="row mx-auto">
                            <h3 class="d-flex justify-content-start">We Provide</h3>
                        </div>
                    </div>
                    <div class="col-6 d-flex justify-content-around">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, fugiat maxime! Iure amet nisi facere
                        esse architecto quasi est ipsam labore minima aliquid rerum rem maiores neque, animi explicabo! Ab!
                </p>
                    </div>
                </div>
                <div class="row mx-auto mt-5 justify-content-between">
                    <div class="card mx-2" style={{ width: "25rem; height:16rem;" }}>
                        <div class="card-body text-center">
                            <h4 class="card-title">All Product Warranty</h4>
                            <h5 class="card-subtitle mb-2 text-muted"><i class="fa fa-check-square"></i></h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's
                        content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                    <div class="card mx-2" style={{ width: "25rem; height:16rem;" }}>
                        <div class="card-body text-center">
                            <h4 class="card-title">Free Shipping</h4>
                            <h5 class="card-subtitle mb-2 text-muted"><i class="fa fa-envelope"></i></h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's
                        content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                    <div class="card mx-2" style={{ width: "25rem; height:16rem;" }}>
                        <div class="card-body text-center">
                            <h4 class="card-title">Custom Product</h4>
                            <h5 class="card-subtitle mb-2 text-muted"><i class="fa fa-magic"></i></h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's
                        content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>



            </main>

        </div>
    )
}
