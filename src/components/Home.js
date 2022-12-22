import { useNavigate,Link } from "react-router-dom"
import footer from "./teacher/footer";


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
                                <a class="nav-link" href="/footer">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/footer">Contact Us</a>
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

           

            {/* <button type="button" class="btn btn-success my-3" onClick={() => { navigate('/teachersignup') }} >Become An Instructor</button><br></br> */}
            {/* <button type="button" class="btn btn-success" onClick={() => { navigate('/studentsignup') }}>Become A Student</button> */}
        </div>
    )
}
export default Home