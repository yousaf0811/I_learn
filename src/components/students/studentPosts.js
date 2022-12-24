import SNavbar from "./studentnavbar";
import { useParams, Link } from "react-router-dom";
import Footer from "../component/footer";

const StudentPosts = ()=>{
    return(
        <div>
                <SNavbar />
            <h1>Student_Post's</h1>
            <Footer />
        </div>
    )
}
export default StudentPosts