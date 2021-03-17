import Header from "./bootstrap-head"
import Nav from "./nav"
import Footer from "./footer"

export default function Layout(props) {
    return (
        <>
            <Header />
            <Nav />
            {props.children}
            <Footer />
        </>
    )
}
