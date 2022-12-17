import { useNavigate } from "react-router-dom"
import React, { useEffect } from "react";
import { useState } from "react";


const Admin = ()=>{

    const [database, setDatabase] = useState([]);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/adminHome");
      };


    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = document.forms[0];
        const userData = database.find((user) => user.email === email.value);
        // console.log("1223", userData )
        if (userData) {
          if (userData.password !== password.value) {
            alert("Invalid password");
          } else {
            localStorage.setItem("name", JSON.stringify(userData.email));
            localStorage.setItem("id", JSON.stringify(userData.password));
            handleClick();
          }
        } else {
          alert("email not found");
        }
        console.log(password, email);
        if (!email.value || !password.value) {
          alert("Fill the empty input fields");
          return false;
        }
      };



      useEffect(() => {
        let localData = localStorage.getItem("name");
        console.log("Data :: ", localData);
        fetch("http://localhost:3010/admin")
          .then((resp) => resp.json())
          .then((info) => setDatabase(info));
      }, []);

    // const navigate = useNavigate();
    return(
        <div>
            <h1>Admin_Login</h1>
            <section class="vh-100" style={{backgroundColor: "#9A616D"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style={{borderRadius: "1rem"}}>
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" class="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleSubmit} >

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                    <span class="h1 fw-bold mb-0">Private Page Only for Admin</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into Admin account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="email" class="form-control form-control-lg" />
                    <label class="form-label" for="email">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="password" class="form-control form-control-lg" />
                    <label class="form-label" for="password">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                  {/* <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <a href="#!"
                      style={{color: "#393f81"}}>Register here</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a> */}
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            {/* <button type="button" class="btn btn-success">Log Out</button> */}
        </div>
    )
}
export default Admin