import { useNavigate } from "react-router-dom"
import { useState } from "react"

const TeacherSignup = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [fatherName, setFatherName] = useState(null);
    const [gender, setGender] = useState(null);
    const [experience, setExperience] = useState(null);
    const [aboutExperience, setAboutExperience] = useState(null);
    const [details, setDetails] = useState(null);
    const [password, setPassword] = useState(null);
    const [address, setAddress] = useState(null);
    const [additionalInformation, setAdditionalInformation] = useState(null);
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null);
    const [skypeId, setSkypeId] = useState(null);
    const [dob, setDob] = useState(null);
    const [number, setNumber] = useState(null);
    // const [course, setCourse] = useState(null);
    const [email, setEmail] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "title") {
            setTitle(value);
          }
        if (id === "firstName") {
          setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
          }
        if (id === "fatherName") {
          setFatherName(value);
        }
        if(id === "experience"){
            setExperience(value);
        }
        if(id === "boutExperience"){
            setAboutExperience(value);
        }
        if(id === "details"){
            setDetails(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "address"){
            setAddress(value);
        }
        if(id === "additionalInformation"){
            setAdditionalInformation(value);
        }
        if(id === "country"){
            setCountry(value);
        }
        if(id === "city"){
            setCity(value);
        }
        if(id === "gender"){
            setGender(value);

        if(id === "skypeId"){
            setSkypeId(value);
        }        }
        if(id === "dob"){
            setDob(value);
        }
         if(id === "number"){
             setNumber(value);
         }
        if(id === "email"){
            setEmail(value);
        }    
    };


    const handleClick = () => {
        navigate('/teacherlogin')};
      const handleSubmit = () => {
        // console.log(name);
        if(!firstName ) { alert('Fill the empty input fields');  return false}; 
        const user = {
            title,
            firstName,
            lastName,
            fatherName,
            gender,
            experience,
            aboutExperience,
            details,
            password,
            additionalInformation,
            country,
            city,
            skypeId,
            dob,
            number,
            address,
            email,
        }
    localStorage.setItem('name', JSON.stringify(user.name));
        fetch('http://localhost:3010/teachers',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        }).then(resp => resp.json()).then(info => handleClick() );
      };
    return (
        <div>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand me-2" href="#">
                        <img
                            src="https://images.unsplash.com/photo-1670602328279-82c100b3dfa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            height="16"
                            alt="MDB Logo"
                            loading="lazy"
                            style={{marginTop: "-1px"}}
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
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        
                        <div class="d-flex align-items-center">
                            <button type="button" class="btn btn-success me-3" onClick={() => { navigate('/teacherlogin') }} >
                                Already has Account ? Click for Login
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="teacher-signup-body" >
            <section class="h-100 h-custom gradient-custom-2">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12">
                            <div class="card card-registration card-registration-2" style={{borderRadius: "15px"}}  >
                                <div class="card-body p-0">
                                    <div class="row g-0">
                                        <div class="col-lg-6">
                                            <div class="p-5">
                                                <h3 class="fw-normal mb-5" style={{color: "#4835d4"}}  >General Infomation</h3>

                                                <div class="mb-4 pb-2">
                                                        <select value={title} class="select" onChange={(e)=>{
                                                            console.log(e.target.value)
                                                            setTitle(e.target.value)
                                                        }}   >
                                                            <option value="Quran Teacher">Quran Teacher</option>
                                                            <option value="Islamic Teacher">Islamic Teacher</option>
                                                            <option value="Molana sb">Molana sb</option>
                                                        </select>
                                                    </div>

                                                <div class="row">
                                                    <div class="col-md-6 mb-4 pb-2">

                                                        <div class="form-outline">
                                                            <input onChange={(e) => handleInputChange(e)} type="text" id="firstName" class="form-control form-control-lg" />
                                                            <label class="form-label" for="firstName">First name</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-6 mb-4 pb-2">

                                                        <div class="form-outline">
                                                            <input onChange={(e) => handleInputChange(e)} type="text" id="lastName" class="form-control form-control-lg" />
                                                            <label class="form-label" for="lastName">Last name</label>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="fatherName" class="form-control form-control-lg" />
                                                        <label class="form-label" for="fatherName">Father Name</label>
                                                    </div>
                                                </div>
                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="gender" class="form-control form-control-lg" />
                                                        <label class="form-label" for="gender">Gender</label>
                                                    </div>
                                                </div>

                                                <div class="mb-4 pb-2">
                                                    <select class="select">
                                                        <option value="1">Experience</option>
                                                        <option value="2">Six months</option>
                                                        <option value="3">Six Months Plus</option>
                                                        <option value="4">One Year</option>
                                                        <option value="5">One Year Plus</option>
                                                        <option value="6">Two Year</option>
                                                        <option value="7">Two Year Plus</option>
                                                    </select>
                                                </div>

                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="boutExperience" class="form-control form-control-lg" />
                                                        <label class="form-label" for="boutExperience">Details About Experience</label>
                                                    </div>
                                                </div>
                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="details" class="form-control form-control-lg" />
                                                        <label class="form-label" for="details">Any Other Details</label>
                                                    </div>
                                                </div>
                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="password" class="form-control form-control-lg" />
                                                        <label class="form-label" for="password">Password</label>
                                                    </div>
                                                </div>
                                                <button type="button" class="btn btn-outline-success btn-lg m-3"
                                                    data-mdb-ripple-color="dark" onClick={()=>{navigate('/teacherlogin')}} >Already has Account ? Click for Login</button>    
                                            </div>
                                        </div>
                                        <div class="col-lg-6 bg-indigo text-white">
                                            <div class="p-5">
                                                <h3 class="fw-normal mb-5">Contact Details</h3>

                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline form-white">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="address" class="form-control form-control-lg" />
                                                        <label class="form-label" for="address">Address</label>
                                                    </div>
                                                </div>

                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline form-white">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="additionalInformation" class="form-control form-control-lg" />
                                                        <label class="form-label" for="additionalInformation">Additional Information</label>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-5 mb-4 pb-2">

                                                        <div class="form-outline form-white">
                                                            <input onChange={(e) => handleInputChange(e)} type="text" id="country" class="form-control form-control-lg" />
                                                            <label class="form-label" for="country">State/Country</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-7 mb-4 pb-2">

                                                        <div class="form-outline form-white">
                                                            <input onChange={(e) => handleInputChange(e)} type="text" id="city" class="form-control form-control-lg" />
                                                            <label class="form-label" for="city">City</label>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="mb-4 pb-2">
                                                    <div class="form-outline form-white">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="skypeId" class="form-control form-control-lg" />
                                                        <label class="form-label" for="skypeId">Skype ID</label>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-5 mb-4 pb-2">

                                                        <div class="form-outline form-white">
                                                            <input onChange={(e) => handleInputChange(e)} type="date" id="dob" class="form-control form-control-lg" />
                                                            <label class="form-label" for="dob">DOB</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-7 mb-4 pb-2">

                                                        <div class="form-outline form-white">
                                                            <input onChange={(e) => handleInputChange(e)} type="text" id="number" class="form-control form-control-lg" />
                                                            <label class="form-label" for="number">Phone Number</label>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="mb-4">
                                                    <div class="form-outline form-white">
                                                        <input onChange={(e) => handleInputChange(e)} type="text" id="email" class="form-control form-control-lg" />
                                                        <label class="form-label" for="email">Your Email</label>
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-start mb-4 pb-3">
                                                    <input onChange={(e) => handleInputChange(e)} class="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                                                    <label class="form-check-label text-white" for="form2Example3">
                                                        I do accept the <a href="#!" class="text-white"><u>Terms and Conditions</u></a> of your
                                                        site.
                                                    </label>
                                                </div>

                                                <button type="button" class="btn btn-success btn-lg"
                                                    data-mdb-ripple-color="dark" onClick={() => handleSubmit()} >Register</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>

            <div className="footer" >
                <div className="padding" >
                    <div className="head">
                        <div className="head-item" >
                            <h4>Contact with us on Social Media</h4>
                        </div>
                        <div className="head-item" >
                            <div className="head-item-link" >
                                <h5>Facebok</h5>
                            </div>
                            <div className="head-item-link" >
                                <h5>LinkedIn</h5>
                            </div>
                            <div className="head-item-link" >
                                <h5>Twitter</h5>
                            </div>
                            <div className="head-item-link" >
                                <h5>Instagram</h5>
                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="middle-item" >
                            <div><h3>ABOUT US</h3></div>
                            <div><p>
                            For learning and reciting the Holy Quran, we provide the best services for you. Allah creates us with great blessings upon us because we are Muslim. It’s possible due to the online Quran academy to recite and learn the Holy Quran with Tajweed. </p></div>
                        </div>
                        <div className="middle-item" >
                           <div><h3>CONTACT US</h3></div>
                           <div>
                            <ul>+92-31234567</ul>
                            <ul>ELernIslamic@gmail.com</ul>
                            <ul>E Learn Islamic Education</ul>
                            <ul>Green Town,Lahore, Pakistan</ul>
                           </div>
                        </div>
                        <div className="middle-item" >
                            <div><h3>OUR SERVICE'S</h3></div>
                            <div>
                                    <ul>ONLINE QURAN MEMORIZATION</ul>                            
                                    <ul>ONLINE QURAN RECITATION</ul>
                                    <ul>ONLINE TAFSEER COURSE</ul>
                                    <ul>ONLINE QURAN READING</ul>
                                    <ul>FEMALE QURAN TUTOR</ul>
                            </div>
                        </div>
                        <div className="middle-item" >
                            <div className="middle-item-heading" >
                                <h3>OUR MISSION</h3>
                            </div>
                            <div className="middle-item-text" >
                                <p>E-Learn Islamic Education has broadened the vision to spread the teachings of the Quran to the Muslims dwelling in a non-Muslim state like the USA. We have aimed to provide a swift communication medium where both learners and teachers feel comfortable to learn in a flexible environment.</p>
                            </div>

                        </div>
                    </div>
                    <div className="bottom">
                        <div className="bottom-item" >
                            <h6>Copyright@2022 E Learn Islamic Education</h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default TeacherSignup