import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

import style from "./style";
const Footer =  ()=>(
    <div className="footer">
        <div className="padding">
            <div className="head">
                <div className="head-item">
                    <div className="head-item-link">
                        <BsFacebook style={style} />
                    </div>
                    <div className="head-item-link">
                        <BsInstagram style={style} />
                    </div>
                    <div className="head-item-link">
                        <BsTwitter style={style} />
                    </div>
                    <div className="head-item-link">
                        <BsLinkedin style={style} />
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="middle-item">
                    <div><h3>ABOUT US</h3></div>
                    <div><p>
                        For learning and reciting the Holy Quran, we provide the best services for you. Allah creates us with great blessings upon us because we are Muslim. It’s possible due to the online Quran academy to recite and learn the Holy Quran with Tajweed. </p></div>
                </div>
                <div className="middle-item">
                    <div><h3>CONTACT US</h3></div>
                    <div>
                        <ul>+92-31234567</ul>
                        <ul>ELernIslamic@gmail.com</ul>
                        <ul>E Learn Islamic Education</ul>
                        <ul>Green Town,Lahore, Pakistan</ul>
                    </div>
                </div>
                <div className="middle-item">
                    <div><h3>OUR SERVICE'S</h3></div>
                    <div>
                        <ul>ONLINE QURAN MEMORIZATION</ul>
                        <ul>ONLINE QURAN RECITATION</ul>
                        <ul>ONLINE TAFSEER COURSE</ul>
                        <ul>ONLINE QURAN READING</ul>
                        <ul>FEMALE QURAN TUTOR</ul>
                    </div>
                </div>
                <div className="middle-item">
                    <div className="middle-item-heading">
                        <h3>OUR MISSION</h3>
                    </div>
                    <div className="middle-item-text">
                        <p>E-Learn Islamic Education has broadened the vision to spread the teachings of the Quran to the Muslims dwelling in a non-Muslim state like the USA. We have aimed to provide a swift communication medium where both learners and teachers feel comfortable to learn in a flexible environment.</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-item">
                    <h6>Copyright@2022 E Learn Islamic Education</h6>
                </div>
            </div>
        </div>
    </div>
)
export default Footer