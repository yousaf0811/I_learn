import Navbar from "./navbar"
import Footer from "./footer";
import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className="about-body" >
                <div className="about-body-item">
                    <h2>About Quran Education</h2>
                    <p>Quran-Edu is an Online Quran School operating from Pakistan. Aim of spreading the message of the Holy Quran. Quran-Edu wants to use the internet to help those brothers and sisters who are facing difficulties in getting education in a Mosque or a Madrasa. Now, you can get quality education for you and/or your kids in the warmth of your houses. Most of all, we focus on maintaining the quality of the traditional education.</p>
                    <button type="button" class="btn btn-warning" onClick={() => { navigate('/courses') }} >Check Our Courses</button>
                </div>
                <div className="about-body-item">
                    <h2>Quran For Everybody</h2>
                    <p>Online Quran School believe that the message of Quran is for everybody. There is no age threshold for the learning of Quran. The significance of Quran in the life of a Muslims is apparent from countless Hadiths. We have designed our courses in a way that caters to the needs of the adults and children alike. Our courses will enable anyone—from any background—to read the Holy Quran with Tajweed.</p>
                </div>
                <div className="about-body-item">
                    <h2>Syllabus</h2>
                    <p>Our syllabus is very simple. We use Noorani Qaida as our textbook for the Basic Tajweed Course. Noorani Qaida is a very small booklet. It is very helpful for the beginners. Our designers have modified it to meet the online standards. The new version is good-looking. It is also colored at certain places. These colors correspond to certain Tajweed rules at those places. We also provide videos to help students in their homework.</p>
                </div>
                <div className="about-body-item">
                    <h2>Faculty</h2>
                    <p>Our faculty consists of highly qualified and experienced teachers. They are certified by Wifaq-ul-Madaris. Moreover, the teachers have considerable experience of online as well as traditional Islamic educational systems. They are hardworking, determined, and dedicated. The teachers are open to criticism. They like to communicate with the students and/or their parents to find new ways to make the study easier and funnier.</p>
                </div>
                <div className="about-body-item">
                    <h2>Conclusion</h2>
                    <p>We pray from Allah that every Muslim in the world should read the Holy Quran with Tajweed. May He make us understand the true message of Islam and Quran. May Allah help us in spreading His message to every corner of the world. (Ameen)</p>
                </div>
            </div>
            <div className="about-body-item-step">
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <button type="button" class="btn btn-warning" onClick={() => { navigate('/studentsignup') }} >Register</button>

            </div>
            <Footer />
        </div>

    )
}
export default About