import { useNavigate } from "react-router-dom"
import Logo from '../../assets/images/logo.png'

const Navbar = () => {


    const navigate = useNavigate();
    return (

        <div>
            <nav class="navbar navbar-expand-lg home-navbar  ">
                <div class="container position-fixed d-flex align-items-center">
                    <a class="navbar-brand me-2" href="/">
                        <img
                            src={Logo}
                            width={100}
                            height={100}
                            alt="MDB Logo"
                            loading="lazy"
                            style={{ marginTop: "-1px", lineHeight: "120px" }}
                        />
                    </a>
                    <h5 className="me-auto">E-Learn Islamic Education</h5>
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
                    <div class="collapse navbar-collapse justify-content-center" id="navbarButtonsExample">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link text-center" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-center" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-center" href="/contactus">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-center" href="courses">Courses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-center" href="fee">Fee Plan's</a>
                            </li>
                        </ul>
                        <div class="ms-auto">
                            <button
                                type="button"
                                class="btn btn-outline-warning me-2"
                                onClick={() => { navigate('/studentlogin') }}
                            >
                                Login for Student
                            </button>
                            <button
                                type="button"
                                class="btn btn-outline-warning"
                                onClick={() => { navigate('/teacherlogin') }}
                            >
                                Login for Teacher
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Navbar