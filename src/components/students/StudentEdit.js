import SNavbar from "./studentnavbar";
import { useParams } from "react-router-dom";
import Footer from "../component/footer";
import StudentDashboard from "./studentDashBoard";


const StudentEdit = ()=>{
    const options = [
        {id: 1, title: "Nothing", value: ''}
    ]
    return(
        <div>
            <SNavbar/>
            <StudentDashboard/>
            <Footer/>
        </div>
    )
}
export default StudentEdit