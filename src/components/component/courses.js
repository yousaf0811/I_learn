import Navbar from "./navbar"
import { useNavigate } from "react-router-dom"
import Footer from "./footer";

const Courses = () => {

    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className="course-body" >
                <div className="course-body-item" >
                    <div className="course-body-item-text" >
                        <h1>Online Quran Courses</h1>
                        <p>We are proud to teach you and your child in a safe and friendly environment. We make sure that the students find the study quick, easy, and enjoyable. We believe that our well-designed online Quran courses are enough to train you in recitation and Tajweed. Moreover, we provide you with an opportunity to understand Quran in the Arabic language. For this, we are bringing two courses: “Basic Arabic Grammar” and “Quran with Tafseer”.

                            We deliver the best online education in Arabic, Quranic, and Islamic learning. To make it easier for you to find what you desire, we have designed six different online Quran courses.</p>
                            <br></br><br></br><button type="button" class="btn btn-warning" onClick={() => { navigate('/studentsignup') }} >Register Now</button>
                    </div>
                    <div className="course-body-item-img" ></div>
                </div>
                <div className="course-body-item" >
                    <div className="course-body-item-text" >
                        <h1>1. Online Basic Quran Reading Course</h1>
                        <p>Online Basic Quran Reading Course introduces students to the Arabic Script. It also initiates students to basic Tajweed rules. This is our one of the best Online Quran Courses. This course is particularly beneficial for those trying to recite the Holy Quran for the first time. Children, as well as adults, are the target of this course. Online Quran academy focuses on the pronunciation of Arabic alphabets. The curriculum consists of a single booklet. This booklet is called Norani Qaida. It has been taught in traditional madrasas for centuries. We also provide videos for the students. These videos help to clarify anything missed during the class. After completing the Basic Quran Reading Course, students can recognize and spell Arabic and Quranic words. In Sha Allah!</p>
                        <br></br><button type="button" class="btn btn-warning" onClick={() => { navigate('/studentsignup') }} >Register Now</button>
                    </div>
                    <div className="course-body-item-img-1" ></div>
                </div>
                <div className="course-body-item" >
                    <div className="course-body-item-text" >
                        <h1>2. Online Quran with Tajweed Course</h1>
                        <p>Every Muslim must recite the Holy Quran according to the rules of the Tajweed. In the Quran with Tajweed Course, our online teachers will help students read the Holy Quran: not even leaving a single page! We will show the students how to apply the rules of Tajweed while reciting the Quran. The rules will include Ghunna, Ikhfa, Qalqala, and others. The online Quran teachers will also explain some advanced rules of the Tajweed. For that matter, we will provide a PDF of the holy Quran where the rules are colored. It will help students in practicing on their own.

                            However, the main focus of this course is to eliminate all the mistakes in reciting the Holy Quran. The course is also self-paced, like the previous one.</p>
                            <br></br><br></br><button type="button" class="btn btn-warning" onClick={() => { navigate('/studentsignup') }} >Register Now</button>
                    </div>
                    <div className="course-body-item-img-2" ></div>
                </div>
                <div className="course-body-item" >
                    <div className="course-body-item-text" >
                        <h1>3. Online Quran Memorization Course</h1>
                        <p>Online Quran Memorization Course is for those who can read and recite Quran with proper Tajweed. We will check applicants with a random Tajweed Test beforehand.

                            It requires great dedication to memorizing the holy Quran. In the Online Quran Memorization Course, our teachers will guide students on how to memorize the Holy Quran. The teachers will provide a particular schedule. This schedule will help the students memorize new verses and revise previous verses. The duration of the course depends on the time and effort put in by the student.</p>
                            <br></br><br></br><br></br><button type="button" class="btn btn-warning" onClick={() => { navigate('/studentsignup') }} >Register Now</button>
                    </div>
                    <div className="course-body-item-img-1" ></div>
                </div>
                <div className="course-body-item" >
                    <div className="course-body-item-text" >
                        <h1>4. Online Quran with Tafseer Course</h1>
                        <p>Understanding the Holy Quran is every Muslim’s dream. But you are lucky. You will learn Tafseer in the comfort of your home! The teachers are Islamic Scholars (ulema) certified by Wifaq Ul-Madaris. They can better explain the subtleties of the Holy Quran.

                            In Online Quran Tafseer Course, you will learn the translation and Tafseer (explanation) of the Quranic Verses. This way, you will understand what Allah (SWT) is saying. Therefore, this course is pertinent for understanding Islam’s real spirit.</p>
                            <br></br><br></br><br></br><br></br><button type="button" class="btn btn-warning" onClick={() => { navigate('/studentsignup') }} >Register Now</button>
                    </div>
                    <div className="course-body-item-img-1" ></div>
                </div>
                <div className="course-body-item" >
                    <div className="course-body-item-text" >
                        <h1>5. Online Arabic Grammar Course</h1>
                        <p>At the online Quran academy, we teach you basic Arabic grammar. It is the most important tool for understanding the Holy Quran. It can also help in speaking and reading the Arabic language. The online teachers for this course are fully competent. Moreover, they have spent years in educational institutes to hone their skills.

                            The Basic Arabic Grammar Course textbooks are Ilm-us-Sarf, Ilm-un-Nahw, and Tareeqa-tul-Asariyyah. At the end of this course, you will be able to understand basic Arabic. Moreover, it will also help you in the Online Quran Tafseer Course.</p>
                            <br></br><br></br><br></br><button type="button" class="btn btn-warning" onClick={() => { navigate('/studentsignup') }} >Register Now</button>
                    </div>
                    <div className="course-body-item-img-1" ></div>
                </div>
                <div className="course-body-item" >
                    <div className="course-body-item-text" >
                        <h1>6. Custom Online Course</h1>
                        <p>Learned some of the Quran but never finished it? Or finished but want to improve it? Do you want to memorize the holy Quran but only some suras? Do you want Tafseer of these suras too?

                            With the choice of this course, the students can customize their online Quran courses based on their interests and prior knowledge of the Holy Quran. Our experienced online Quran teachers will assist them in selecting the best options to improve their recitation of the Holy Quran.</p>
                            <br></br><br></br><br></br><br></br><button type="button" class="btn btn-warning" onClick={() => { navigate('/studentsignup') }} >Register Now</button>
                    </div>
                    <div className="course-body-item-img-1" ></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Courses