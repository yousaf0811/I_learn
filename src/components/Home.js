import { useNavigate } from "react-router-dom"


const Home = () => {
    const navigate = useNavigate();

    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand me-2" href="#">
                        <img
                            src="https://images.unsplash.com/photo-1670602328279-82c100b3dfa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            height="16"
                            alt="MDB Logo"
                            loading="lazy"
                            style={{marginTop: "-1px"}}
                        />
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        
                        <div class="d-flex align-items-center">
                            <button type="button" class="btn btn-success px-3 me-2" onClick={() => { navigate('/studentlogin') }} >
                                Login for Student
                            </button>
                            {/* <button type="button" class="btn btn-success me-3" onClick={() => { navigate('/studentsignup') }} >
                                Sign up for Student
                            </button> */}
                            <button type="button" class="btn btn-warning px-3 me-2" onClick={() => { navigate('/teacherlogin') }} >
                                Login for Teacher
                            </button>
                            {/* <button type="button" class="btn btn-success me-3" onClick={() => { navigate('/teachersignup') }} >
                                Sign up for Teacher
                            </button> */}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="home-body" >
                {/* <h1>Body is Under development</h1> */}
                {/* <!-- Carousel wrapper --> */}
<div
  id="carouselVideoExample"
  class="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
  {/* <!-- Indicators --> */}
  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  {/* <!-- Inner --> */}
  <div class="carousel-inner">
    {/* <!-- Single item --> */}
    <div class="carousel-item active">
      <video class="img-fluid" autoplay loop muted>
        <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
      </video>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </p>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div class="carousel-item">
      <video class="img-fluid" autoplay loop muted>
        <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
      </video>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div class="carousel-item">
      <video class="img-fluid" autoplay loop muted>
        <source
          src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
          type="video/mp4"
        />
      </video>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </div>
    </div>
  </div>
  {/* <!-- Inner --> */}

  {/* <!-- Controls --> */}
  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselVideoExample"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselVideoExample"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/* <!-- Carousel wrapper --> */}
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

            {/* <button type="button" class="btn btn-success my-3" onClick={() => { navigate('/teachersignup') }} >Become An Instructor</button><br></br> */}
            {/* <button type="button" class="btn btn-success" onClick={() => { navigate('/studentsignup') }}>Become A Student</button> */}
        </div>
    )
}
export default Home