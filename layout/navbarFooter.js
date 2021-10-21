import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

const NavbarFooter = (props) =>{
    return(
        <>
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}
export default NavbarFooter
