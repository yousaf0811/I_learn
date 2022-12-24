import Navbar from "./navbar"
import Footer from "./footer";
import { useNavigate } from "react-router-dom"


const Contactus = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-body" >
                <h4>Have any Questions...!</h4>
                <h1>Contact Information</h1>
                <div className="contact-div">
                    <div className="contact-div-item" >
                        <h1>Our Location</h1>
                        <h4>Quran-Edu Jummah Goth Landhi
                            Karachi, Pakistan</h4>
                    </div>
                    <div className="contact-div-item" >
                        <h1>Contact Us</h1>
                        <h4>Mobile: +923123456789</h4>
                        <h4>Mobile: +923123456789</h4>
                    </div>
                    <div className="contact-div-item" >
                        <h1>E-mail</h1>
                        <h4>info@quran-edu.com</h4>
                        <h4>quran-edu@hotmail.com</h4>
                    </div>
                </div>
            </div>
            <Footer />
            {/* <h1>Contact US Page</h1> */}
        </div>
    )
}
export default Contactus