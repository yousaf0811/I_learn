// import { useNavigate } from "react-router-dom"


const StudentAccount = ()=>{

    // const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        window.location.replace('/')

        // window.location = "/"
    }
    return(
        <div>
            <h1>Student_Account</h1>
            <button type="button" class="btn btn-success" onClick={handleLogOut}>Log Out</button>
        </div>
    )
}
export default StudentAccount