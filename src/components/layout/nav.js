import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useAppContext } from '../../contexts/ApplicationContext'
export default function Nav() {
    const { state } = useAppContext()
    return (
        <div>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="generator" content="Jekyll v4.0.1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
                    integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap" rel="stylesheet"></link>
            </Head>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-around">
                <div className="container-fluid d-flex justify-content-around">
                    <div className="collapse navbar-collapse d-flex" id="navbarsExampleDefault">
                        <div className="col-7">
                            <h1 className="text-light d-flex justify-content-end" style={{ fontFamily: "Merienda, cursive" }}>LightHouse Candles</h1>
                        </div>
                        <div className="col-5">

                            <ul className="navbar-nav me-auto mb-2 mb-md-0 d-flex align-items-center justify-content-end">
                                <li className="nav-item active">
                                    <Link href="/"><a className="nav-link"><h5><i className="fas fa-home"></i></h5></a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/shopping-cart"><a className="nav-link"><h5><i className="fas fa-shopping-cart"></i> ({state.items.length})</h5></a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
