const StudentDashboard = ()=>{
    const handleLogOut = () => {
        localStorage.clear();
        window.location.replace('/')
    
        // window.location = "/"
    }
    return(
        <div>
            
            <div className="student-dashboard">
                    <div className="student-dashboard-buttons" >
                    <a href="/studentEdit" class="btn btn-outline-secondary m-3 btn-lg ">Edit Profile</a>
                    </div>
                    <div className="student-dashboard-buttons" >
                    <a href="/studentquery" class="btn btn-outline-secondary m-3 btn-lg ">Create Post</a>
                    </div>
                    <div className="student-dashboard-buttons" >
                    <a href="/studentposts" class="btn btn-outline-secondary m-3 btn-lg ">View Post</a>
                    </div>
                    <div className="student-dashboard-buttons" >
                    <a href="#!" class="btn btn-outline-secondary m-3 btn-lg " onClick={handleLogOut} >Logout</a>
                    </div>

                </div>
            
        </div>
    )
}
export default StudentDashboard