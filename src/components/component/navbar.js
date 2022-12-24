import { useNavigate } from "react-router-dom"
import Logo from '../../assets/images/logo.png'

const Navbar = () => {


    const navigate = useNavigate();
    return (

        <div>
            <nav class="navbar navbar-expand-lg home-navbar  ">
                <div class="container position-fixed ">
                    <a class="navbar-brand me-2" href="/">
                        <img
                            src={Logo}
                            width={100}
                            height={100}
                            alt="MDB Logo"
                            loading="lazy"
                            style={{ marginTop: "-1px", lineHeight:"120px" }}
                        />
                    </a>
                    <h1>E-Learn Islamic Education</h1>
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
                    <div className="nb-text" >
                        <div class="collapse navbar-collapse" id="navbarButtonsExample">
                            <div className="navbar-text-colour" ></div>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contactus">Contact Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="courses">Courses</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="fee">Fee Plan's</a>
                                </li>
                            </ul>
                            <div class="d-flex align-items-center">
                                <button type="button" class="btn btn-outline-secondary px-3 me-2" onClick={() => { navigate('/studentlogin') }} >
                                    Login for Student
                                </button>
                                <button type="button" class="btn btn-outline-secondary px-3 me-2" onClick={() => { navigate('/teacherlogin') }} >
                                    Login for Teacher
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Navbar