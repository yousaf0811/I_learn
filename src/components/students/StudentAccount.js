import SNavbar from "./studentnavbar";
import { useParams, Link } from "react-router-dom";
import Footer from "../component/footer";
import { useEffect, useState } from "react";
const StudentAccount = () => {
    const { id } = useParams();
    const [student,setStudent] = useState([]);
   useEffect(()=>{
    fetch(`http://localhost:3010/student/${id}`)
    .then((responce)=>responce.json())
    .then((json)=>{setStudent(json);
    })
   },[]);
   const handleLogOut = () => {
    localStorage.clear();
    window.location.replace('/')

    // window.location = "/"
}
    return (
        <div>
            <SNavbar />
            <div className="student-account-body" >
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
                <div className="student-account-profile" >

                    <div class="card profile-card">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone" />
                        <div class="card-body">
                            <h5 class="card-title">Student Name: {student.firstName} {student.lastName}</h5>
                            <h5 class="card-title">Father Name: {student.fatherName}</h5>
                            <h5 class="card-title">Email: {student.email}</h5>
                            <h5 class="card-title">Address: {student.address}</h5>
                            <h5 class="card-title">City: {student.city}</h5>
                            <h5 class="card-title">DOB: {student.dob}</h5>
                            <h5 class="card-title">Course: {student.course}</h5>
                            <h5 class="card-title">Gender: {student.gender}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/studentEdit" class="btn btn-warning">Edit Profile</Link>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}
export default StudentAccount