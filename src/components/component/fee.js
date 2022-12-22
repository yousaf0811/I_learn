import { useNavigate } from "react-router-dom"
import Navbar from "./navbar";
import Footer from "./footer";


const Fee =()=>{
    const navigate = useNavigate();
    return(
        <div>
            <Navbar/>
            <div className="fee-body" >
                <div className="fee-body-method">
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Fee