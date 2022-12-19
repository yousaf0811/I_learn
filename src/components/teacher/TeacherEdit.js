import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const TeacherEdit = () => {
    const navigate = useNavigate();
    const [database, setDatabase] = useState(null);
    const [title, setTitle] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [fatherName, setFatherName] = useState(null);
    const [gender, setGender] = useState(null);
    const [experience, setExperience] = useState(null);
    const [aboutExperience, setAboutExperience] = useState(null);
    const [details, setDetails] = useState(null);
    const [address, setAddress] = useState(null);
    const [additionalInformation, setAdditionalInformation] = useState(null);
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null);
    const [skypeId, setSkypeId] = useState(null);
    const [dob, setDob] = useState(null);
    const [number, setNumber] = useState(null);
    // const [course, setCourse] = useState(null);

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
        if (id === "experience") {
            setExperience(value);
        }
        if (id === "boutExperience") {
            setAboutExperience(value);
        }
        if (id === "details") {
            setDetails(value);
        }
        if (id === "address") {
            setAddress(value);
        }
        if (id === "additionalInformation") {
            setAdditionalInformation(value);
        }
        if (id === "country") {
            setCountry(value);
        }
        if (id === "city") {
            setCity(value);
        }
        if (id === "gender") {
            setGender(value);
        }
        if (id === "skypeId") {
            setSkypeId(value);
        }
        if (id === "dob") {
            setDob(value);
        }
        if (id === "number") {
            setNumber(value);
        }
    };

    useEffect(() => {
        let localData = localStorage.getItem("id");
        let teacherID = JSON.parse(localData);
        console.log("Data :: ", localData, " :: ", teacherID);
        fetch("http://localhost:3010/teachers/" + teacherID)
            .then((resp) => resp.json())
            .then((info) => {
                setDatabase(info)
                console.log(info)
                setTitle(info.title)
                setFirstName(info.firstName)
                setLastName(info.lastName)
                setFatherName(info.fatherName)
                setGender(info.gender)
                setExperience(info.experience)
                setAboutExperience(info.aboutExperience)
                setDetails(info.details)
                setAddress(info.address)
                setAdditionalInformation(info.additionalInformation)
                setCountry(info.country)
                setCity(info.city)
                setSkypeId(info.skypeId)
                setDob(info.dob)
                setNumber(info.number)
            });
    }, []);


    const handleEditSubmit = () => {
        // console.log(name);
        if (!firstName) { alert('Fill the empty input fields'); return false };
        const user = database;
        user.title = title;
        user.firstName = firstName;
        user.lastName = lastName;
        user.fatherName = fatherName;
        user.gender = gender;
        user.experience = experience;
        user.aboutExperience = aboutExperience;
        user.details = details;
        user.address = address;
        user.additionalInformation = additionalInformation;
        user.country = country;
        user.city = city;
        user.skypeId = skypeId;
        user.dob = dob;
        user.number = number;
        


        localStorage.setItem('name', JSON.stringify(firstName));
        fetch('http://localhost:3010/teachers/' + database.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(resp => resp.json()).then(info => handleClick());
    };


    const handleClick = () => {
        navigate('/teacherAccount')
    };
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    {/* <a class="navbar-brand me-2" href="#">
                        <img
                            src="https://images.unsplash.com/photo-1670602328279-82c100b3dfa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            height="16"
                            alt="MDB Logo"
                            loading="lazy"
                            style={{marginTop: "-1px"}}
                        />
                    </a> */}
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
                        {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul> */}
                        <div><h3>Edit-Account</h3></div>

                        {/* <div class="d-flex align-items-center">
                            <button type="button" class="btn btn-success me-3" onClick={() => { navigate('/teacherlogin') }} >
                                Already has Account ? Click for Login
                            </button>
                        </div> */}
                    </div>
                </div>
            </nav>
            <div className="teacher-signup-body" >
                <section class="h-100 h-custom gradient-custom-2">
                    <div class="container py-5 h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12">
                                <div class="card card-registration card-registration-2" style={{ borderRadius: "15px" }}  >
                                    <div class="card-body p-0">
                                        <div class="row g-0">
                                            <div class="col-lg-6">
                                                <div class="p-5">
                                                    <h3 class="fw-normal mb-5" style={{ color: "#4835d4" }}  >General Infomation</h3>

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
                                                                <input value={firstName} onChange={(e) => handleInputChange(e)} type="text" id="firstName" class="form-control form-control-lg" />
                                                                <label class="form-label" for="firstName">First name</label>
                                                            </div>

                                                        </div>
                                                        <div class="col-md-6 mb-4 pb-2">

                                                            <div class="form-outline">
                                                                <input value={lastName} onChange={(e) => handleInputChange(e)} type="text" id="lastName" class="form-control form-control-lg" />
                                                                <label class="form-label" for="lastName">Last name</label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="mb-4 pb-2">
                                                        <div class="form-outline">
                                                            <input value={fatherName} onChange={(e) => handleInputChange(e)} type="text" id="fatherName" class="form-control form-control-lg" />
                                                            <label class="form-label" for="fatherName">Father Name</label>
                                                        </div>
                                                    </div>
                                                    <div class="mb-4 pb-2">
                                                        <div class="form-outline">
                                                            <input value={gender} onChange={(e) => handleInputChange(e)} type="text" id="gender" class="form-control form-control-lg" />
                                                            <label class="form-label" for="gender">Gender</label>
                                                        </div>
                                                    </div>

                                                    <div class="mb-4 pb-2">
                                                        <div class="form-outline">
                                                            <select value={experience} class="select" onChange={(e)=>{
                                                            console.log(e.target.value)
                                                            setExperience(e.target.value)
                                                            }}
                                                            >
                                                                <option value="Six months">Six months</option>
                                                                <option value="Six Months Plus">Six Months Plus</option>
                                                                <option value="One Year">One Year</option>
                                                                <option value="One Year Plus">One Year Plus</option>
                                                                <option value="Two Year">Two Year</option>
                                                                <option value="Two Year Plus">Two Year Plus</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="mb-4 pb-2">
                                                        <div class="form-outline">
                                                            <input value={aboutExperience} onChange={(e) => handleInputChange(e)} type="text" id="boutExperience" class="form-control form-control-lg" />
                                                            <label class="form-label" for="boutExperience">Details About Experience</label>
                                                        </div>
                                                    </div>
                                                    <div class="mb-4 pb-2">
                                                        <div class="form-outline">
                                                            <input value={details} onChange={(e) => handleInputChange(e)} type="text" id="details" class="form-control form-control-lg" />
                                                            <label class="form-label" for="details">Any Other Details</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 bg-indigo text-white" >
                                                <div class="p-5">
                                                    <h3 class="fw-normal mb-5">Contact Details</h3>

                                                    <div class="mb-4 pb-2">
                                                        <div class="form-outline form-white">
                                                            <input value={address} onChange={(e) => handleInputChange(e)} type="text" id="address" class="form-control form-control-lg" />
                                                            <label class="form-label" for="address">Address</label>
                                                        </div>
                                                    </div>

                                                    <div class="mb-4 pb-2">
                                                        <div class="form-outline form-white">
                                                            <input value={additionalInformation} onChange={(e) => handleInputChange(e)} type="text" id="additionalInformation" class="form-control form-control-lg" />
                                                            <label class="form-label" for="additionalInformation">Additional Information</label>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-5 mb-4 pb-2">

                                                            <div class="form-outline form-white">
                                                                <input value={country} onChange={(e) => handleInputChange(e)} type="text" id="country" class="form-control form-control-lg" />
                                                                <label class="form-label" for="country">State/Country</label>
                                                            </div>

                                                        </div>
                                                        <div class="col-md-7 mb-4 pb-2">

                                                            <div class="form-outline form-white">
                                                                <input value={city} onChange={(e) => handleInputChange(e)} type="text" id="city" class="form-control form-control-lg" />
                                                                <label class="form-label" for="city">City</label>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="mb-4 pb-2">
                                                        <div class="form-outline form-white">
                                                            <input value={skypeId} onChange={(e) => handleInputChange(e)} type="text" id="skypeId" class="form-control form-control-lg" />
                                                            <label class="form-label" for="skypeId">Skype ID</label>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-5 mb-4 pb-2">

                                                            <div class="form-outline form-white">
                                                                <input value={dob} onChange={(e) => handleInputChange(e)} type="date" id="dob" class="form-control form-control-lg" />
                                                                <label class="form-label" for="dob">DOB</label>
                                                            </div>

                                                        </div>
                                                        <div class="col-md-7 mb-4 pb-2">

                                                            <div class="form-outline form-white">
                                                                <input value={number} onChange={(e) => handleInputChange(e)} type="text" id="number" class="form-control form-control-lg" />
                                                                <label class="form-label" for="number">Phone Number</label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <button type="button" class="btn btn-warning px-3 me-2" onClick={() => { handleEditSubmit() }} >
                                                        save
                                                    </button>

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


        </div>
    )
}
export default TeacherEdit