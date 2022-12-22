import { useNavigate } from "react-router-dom"


const TeacherAccount = () => {

    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
            <h1>Teacher_Account</h1>
            <nav  class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container">
                    <a class="navbar-brand me-2" href="#">
                    </a>
                    <div class="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item bg-light">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item bg-light">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item bg-light">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>

                        <div class="d-flex align-items-center">
                            <button type="button" class="btn btn-danger" onClick={() => { navigate('/') }}>Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="child-1">
                <div  style={{paddingTop:50}}><button type="button"class="btn btn-dark btn-lg px-2" onClick={() => { navigate('/teacheredit') }}>Edit Account</button></div>
                <div  style={{paddingTop:50}}><button type="button" class="btn btn-dark btn-lg px-2 " onClick={() => { navigate('/Createpost') }}>Create Post</button></div>
                <div  style={{paddingTop:50}}><button type="button" class="btn btn-dark btn-lg px-3 " onClick={() => { navigate('/viewpost') }}>View Post</button></div>
            </div>

        </div>
    )
}
export default TeacherAccount