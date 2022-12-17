// import { useNavigate } from "react-router-dom"


const TeacherAccount = ()=>{

    // const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.clear();
        window.location.reload();
    }
    return(
        <div>
            <h1>Teacher_Account</h1>
            <button type="button" class="btn btn-success" onClick={handleLogOut}>Log Out</button>
        </div>
    )
}
export default TeacherAccount