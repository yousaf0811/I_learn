import { useNavigate } from "react-router-dom"
import Navbar from "./component/navbar";
import Footer from "./component/footer";
// import body_photo from '../../assets/images/body_photo.jpg'
import body_photo from '../assets/images/body_photo.jpg'
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="home-body" >
        <br></br><br></br>
        <h1>E-Learn Islamic Education</h1>
        <p>“The best among you is he who learns the Quran and teaches it” (Bukhari)</p><br></br><br></br><br></br><br></br><br></br>
        <button type="button" class="btn btn-lg btn-warning" onClick={() => { navigate('/studentlogin') }}>Login Student Account</button>
      </div>
      <div className="home-body-text" >
        <div className="home-body-text-item">
          <h2>Welcome to Online Quran Academy</h2>
          <p>Quran-Edu is an Online Quran academy. It started working in 2011. And aims to spread Quranic education around the world. The lack of Islamic educational institutes in online space has created a vacuum. It needs to be filled so that everyone can learn Islam and the Quran. We are bringing the light of the Holy Quran to online spaces.

            Our online Quran teachers are dedicated, qualified, hardworking, and experienced. We take special care of students’ needs. The online Quran academy offers flexible hours. Students can choose the best time possible out of their busy schedules. The institute has made videos of the lessons to help with the homework. The online Quran courses offered are easy and engaging.

            At our online Quran academy, we believe everyone, regardless of age, gender, or occupation, is entitled to learn the Holy Quran. In this message, we believe with all our hearts. In this, we want others to believe. So, join us and be one of us!

          </p>
        </div>
        <div className="home-body-text-item">
          <h1>Significance of The Holy Quran</h1>
          <h2>“Read! In the name of your Lord, who has created (all that exists)” (Al Quran)</h2>
          <p>The Holy Quran is the book of Allah revealed to Prophet Muhammad (P.B.U.H) fourteen hundred years ago. Not even a dot has been displaced in this book since then. It is Allah’s final and the last book of guidance for mankind. The direction of the true path is set in this book. Mankind needs to understand the message of the Holy Quran correctly. We must follow its message If we want happiness in this world and the hereafter.</p>
        </div>
        <div className="home-body-text-item">
          <h1>Our Mission</h1>
          <h2>“The best among you is he who learns the Quran and teaches it” (Bukhari)</h2>
          <p>We aim to provide quality Quranic and Islamic education online. The main focus is on reciting the Holy Quran with the rules of Tajweed. Tajweed is necessary for reverence and submission in Salah (Namaz). Moreover, Tajweed is one of the etiquettes to read the holy Quran. Online Quran academy considers that the basic knowledge of Islam should reach every Muslim. The “online” aspect of the academy is an extension of that goal.</p>
        </div>
        <div className="home-body-text-item">
          <h1>How Online Quran Classes Work?</h1>
          <p>The classes will be online. You will require a stable internet connection. Moreover, you will also need an ID on Zoom, Skype, or Oovoo. You can use any device that supports these software. Our teachers are going to be online on your selected timings. The first three classes will be a free trial. After these classes, you can choose to stay or leave a course. Above all, there is no need for webcams. We only use the screen sharing option to teach you. It enables you to see the same screen which is being used by the teacher. We will also assess your performance through the monthly tests. In January every year, we hold a competition. However, you will have to register at the desired course first. Besides, you can ask for our help to find the right course.</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
export default Home