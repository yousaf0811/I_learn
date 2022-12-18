import { useNavigate } from "react-router-dom"
import Navbar from "./component/navbar";
const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
          <Navbar/>
            <div className="home-body" >
            </div>
            <div className="footer" >
                <div className="padding" >
                    <div className="head">
                        <div className="head-item" >
                            <h4>Contact with us on Social Media</h4>
                        </div>
                        <div className="head-item" >
                            <div className="head-item-link" >
                                <h5>Facebok</h5>
                            </div>
                            <div className="head-item-link" >
                                <h5>LinkedIn</h5>
                            </div>
                            <div className="head-item-link" >
                                <h5>Twitter</h5>
                            </div>
                            <div className="head-item-link" >
                                <h5>Instagram</h5>
                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="middle-item" >
                            <div><h3>ABOUT US</h3></div>
                            <div><p>
                            For learning and reciting the Holy Quran, we provide the best services for you. Allah creates us with great blessings upon us because we are Muslim. It’s possible due to the online Quran academy to recite and learn the Holy Quran with Tajweed. </p></div>
                        </div>
                        <div className="middle-item" >
                           <div><h3>CONTACT US</h3></div>
                           <div>
                            <ul>+92-31234567</ul>
                            <ul>ELernIslamic@gmail.com</ul>
                            <ul>E Learn Islamic Education</ul>
                            <ul>Green Town,Lahore, Pakistan</ul>
                           </div>
                        </div>
                        <div className="middle-item" >
                            <div><h3>OUR SERVICE'S</h3></div>
                            <div>
                                    <ul>ONLINE QURAN MEMORIZATION</ul>                            
                                    <ul>ONLINE QURAN RECITATION</ul>
                                    <ul>ONLINE TAFSEER COURSE</ul>
                                    <ul>ONLINE QURAN READING</ul>
                                    <ul>FEMALE QURAN TUTOR</ul>
                            </div>
                        </div>
                        <div className="middle-item" >
                            <div className="middle-item-heading" >
                                <h3>OUR MISSION</h3>
                            </div>
                            <div className="middle-item-text" >
                                <p>E-Learn Islamic Education has broadened the vision to spread the teachings of the Quran to the Muslims dwelling in a non-Muslim state like the USA. We have aimed to provide a swift communication medium where both learners and teachers feel comfortable to learn in a flexible environment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="bottom-item" >
                            <h6>Copyright@2022 E Learn Islamic Education</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home