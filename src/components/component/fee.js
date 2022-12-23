import { useNavigate } from "react-router-dom"
import Navbar from "./navbar";
import Footer from "./footer";


const Fee = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className="fee-body" >
                <div className="fee-body-method">
                    {/* <h1>Online Quran Classes</h1> */}
                    <div className="fee-body-text" >
                        <h1>Online Quran Classes</h1>
                        <p>Online Quran Academy offers a variety of online Quran classes and learning options to meet the needs of its students. We have also designed special weekend courses for those who at working. Have a look at the study options and select the one you like the most!

                            At our Online Quran Institute, you will find an affordable Fee structure for the courses. If you cannot afford the courses, don’t worry! We also provide financial assistance to the deserving students.

                            We are verified from PayPal. However, you can also pay through Direct Bank Deposit, and various payment gateways.</p>
                        <button type="button" class="btn btn-warning" onClick={() => { navigate('/studentsignup') }} >Register Now</button>
                    </div>
                    <div className="fee-body-img" >
                        <img src={require('../../assets/images/pay.png')} height={400} width={400} />
                    </div>
                </div>
                <div className="fee-points" >
                    <div className="fee-points-text" >
                        <h1>Important Information:</h1>
                        <li>Proper time for every individual Student.</li>
                        <li>Up to 20 minutes for every Class (Up to 45 minutes for The Holy Quran Memorize).</li>
                        <li>On the end of every month Test will be conducted.</li>
                        <li>Parents meeting with admin.</li>
                        <li>Classes will be conducted on Student’s desired timing and days.</li>
                        <li>Facility available for group Classes.</li>
                        <li>Video of every lesson after the Class (We are sending link of videos to our Students and this is another extra effort that is making us different from other Online Quran Institutes).</li>
                        <li>3 Days Free Trial Classes.</li>
                        <li>Availability of Teacher Whenever Student has any question about lesson or any other Islamic Studies.</li>
                        <li>We are offering special discount for more than four students from the same family/household.</li>
                        <li>Online Quran Academy is providing highly excellent academic facilities at very low and cheap Hadya/Fee.</li>
                        <li>Multi Payment Options.</li>
                        <li>Quran-Edu is providing Free Quran Classes for those who can’t afford to pay for our premium classes.</li>
                        <li>With our Free Quran Classes you can access our all futures that are available for premium members so, feel free to register yourself for Free Quran Classes.</li>
                        <p>If you have any further queries, please do not hesitate to <a>contact with us.</a></p>
                        <br></br>
                        <button type="button" class="btn btn-warning" onClick={() => { navigate('/contactus') }} >Contact Us</button>
                    </div>
                </div>
                <div className="fee-plan-heading-1">
                    <h1>Pricing Tables Of Your Desired Plans For Tajweed Courses</h1>
                    <h3>United States Currency Pricing Table</h3>
                </div>
                <div className="fee-plan" >
                    <div className="fee-plan-item" >
                        <div className="fee-days" >
                            <h4>2 Days Classes</h4>
                                <h6>in a week</h6>
                        </div>
                        <div className="fee-amount" >
                            <h1>35 $</h1>
                            <h6>Monthly</h6>
                        </div>
                        <div className="fee-details" >
                           <h4><li>3 Days free trial</li></h4>
                           <h4><li> Up to 20 Minutes</li></h4>
                           <h4><li>8 Classes Per Month</li></h4>
                           <h4><li>Monthly Test</li></h4>
                           <h4><li>Admin Meeting</li></h4><br></br><br></br>
                           <button type="button" class="btn btn-warning btn-lg " onClick={() => { navigate('/studentsignup') }} >Register Now</button>
                        </div>
                    </div>
                    <div className="fee-plan-item" >
                    <div className="fee-days" >
                            <h4>2 Days Classes</h4>
                                <h6>in a week</h6>
                        </div>
                        <div className="fee-amount" >
                            <h1>35 $</h1>
                            <h6>Monthly</h6>
                        </div>
                        <div className="fee-details" >
                           <h4><li>3 Days free trial</li></h4>
                           <h4><li> Up to 20 Minutes</li></h4>
                           <h4><li>8 Classes Per Month</li></h4>
                           <h4><li>Monthly Test</li></h4>
                           <h4><li>Admin Meeting</li></h4><br></br><br></br>
                           <button type="button" class="btn btn-warning btn-lg " onClick={() => { navigate('/studentsignup') }} >Register Now</button>
                        </div>
                    </div>
                    <div className="fee-plan-item" >
                    <div className="fee-days" >
                            <h4>2 Days Classes</h4>
                                <h6>in a week</h6>
                        </div>
                        <div className="fee-amount" >
                            <h1>35 $</h1>
                            <h6>Monthly</h6>
                        </div>
                        <div className="fee-details" >
                           <h4><li>3 Days free trial</li></h4>
                           <h4><li> Up to 20 Minutes</li></h4>
                           <h4><li>8 Classes Per Month</li></h4>
                           <h4><li>Monthly Test</li></h4>
                           <h4><li>Admin Meeting</li></h4><br></br><br></br>
                           <button type="button" class="btn btn-warning btn-lg " onClick={() => { navigate('/studentsignup') }} >Register Now</button>
                        </div>
                    </div>
                    <div className="fee-plan-item" >
                    <div className="fee-days" >
                            <h4>2 Days Classes</h4>
                                <h6>in a week</h6>
                        </div>
                        <div className="fee-amount" >
                            <h1>35 $</h1>
                            <h6>Monthly</h6>
                        </div>
                        <div className="fee-details" >
                           <h4><li>3 Days free trial</li></h4>
                           <h4><li> Up to 20 Minutes</li></h4>
                           <h4><li>8 Classes Per Month</li></h4>
                           <h4><li>Monthly Test</li></h4>
                           <h4><li>Admin Meeting</li></h4><br></br><br></br>
                           <button type="button" class="btn btn-warning btn-lg " onClick={() => { navigate('/studentsignup') }} >Register Now</button>
                        </div>
                    </div>
                    <div className="fee-plan-item" >
                    <div className="fee-days" >
                            <h4>2 Days Classes</h4>
                                <h6>in a week</h6>
                        </div>
                        <div className="fee-amount" >
                            <h1>35 $</h1>
                            <h6>Monthly</h6>
                        </div>
                        <div className="fee-details" >
                           <h4><li>3 Days free trial</li></h4>
                           <h4><li> Up to 20 Minutes</li></h4>
                           <h4><li>8 Classes Per Month</li></h4>
                           <h4><li>Monthly Test</li></h4>
                           <h4><li>Admin Meeting</li></h4><br></br><br></br>
                           <button type="button" class="btn btn-warning btn-lg " onClick={() => { navigate('/studentsignup') }} >Register Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Fee