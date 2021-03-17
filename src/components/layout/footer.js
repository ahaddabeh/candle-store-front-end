import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Footer() {
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
            </Head>
            <footer class="footer mt-5 py-3 bg-dark" >
                <div class="container text-light">
                    <div class="row mx-auto">
                        <div class="col-6">
                            <h3>Contact Info:</h3>
                            <p>
                                Email: ahaddabeh@gmail.com
                    </p>
                            <p>
                                Phone: 123-456-7890
                    </p>
                            <p>
                                Location: Apple Bee Ave., Tampa, FL
                    </p>
                        </div>
                        <div class="col-6">
                            <h3 class="d-flex justify-content-end">Follow us on:</h3>
                            <h3 class="d-flex justify-content-end"><i class="fa fa-facebook-square"></i></h3>
                            <h3 class="d-flex justify-content-end"><i class="fa fa-twitter-square"></i></h3>
                            <h3 class="d-flex justify-content-end"><i class="fa fa-instagram-square"></i></h3>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
