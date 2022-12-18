import { useNavigate } from "react-router-dom"
const Navbar = ()=>{


    const navigate = useNavigate();
   return(

    <div>
                    <nav class="navbar navbar-expand-lg home-navbar ">
                <div class="container">
                    <a class="navbar-brand me-2" href="/">
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
                    <div className="nb-text" >
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
                </div>
            </nav>
    </div>

   ) 
}
export default Navbar