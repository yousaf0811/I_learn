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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand me-2" href="#">
                        <img
                            src="https://images.unsplash.com/photo-1670602328279-82c100b3dfa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            height="16"
                            alt="MDB Logo"
                            loading="lazy"
                            style={{ marginTop: "-1px" }}
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
                            <button type="button" class="btn btn-dark" onClick={() => { navigate('/home') }}>Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="dashboard">
                <div><button type="button" class="btn btn-dark btn-lg px-2" onClick={() => { navigate('/teacheredit') }}>Edit Account</button></div>
                <div><button type="button" class="btn btn-dark btn-lg px-2 " onClick={() => { navigate('/Createpost') }}>Create Post</button></div>
                <div><button type="button" class="btn btn-dark btn-lg px-3 " onClick={() => { navigate('/teacheraccount') }}>View Post</button></div>
            </div>

        </div>
    )
}
export default TeacherAccount