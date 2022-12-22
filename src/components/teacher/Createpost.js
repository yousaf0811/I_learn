import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Post = () => {
    const [name, setName] = useState(null);
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = () => {
        const npost = {
            name: name,
            title,
            body: body,
        }
        localStorage.setItem("name", JSON.stringify(name));
        fetch("http://localhost:3010/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(npost),
        })
            .then((resp) => resp.json())
            .then((info) => navigate("/teacheraccount"));
        navigate("/teacheraccount")
    };
    return (

        <div>
            <h1>Create-Post</h1>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container">
                    <div class="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item bg-light">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item bg-light">
                                <a class="nav-link" href="/footer">About</a>
                            </li>
                            <li class="nav-item bg-light">
                                <a class="nav-link" href="/footer">Contact Us</a>
                            </li>
                        </ul>
                        <div class="d-flex align-items-center">
                            <button type="button" class="btn btn-danger" onClick={() => { navigate('/') }}>Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="parent" >
                <div className="child-1">
                    <div style={{ paddingTop: 50 }}><button type="button" class="btn btn-dark btn-lg px-2" onClick={() => { navigate('/teacheredit') }}>Edit Account</button></div>
                    <div style={{ paddingTop: 50 }}><button type="button" class="btn btn-dark btn-lg px-2" onClick={() => { navigate('/Createpost') }}>Create Post</button></div>
                    <div style={{ paddingTop: 50 }}><button type="button" class="btn btn-dark btn-lg px-3" onClick={() => { navigate('/viewpost') }}>View Post</button></div>
                </div>
                <div class="child-2">
                    <form >
                        <div className="form row">
                            <div class="form-group col-md-8">
                                <label className="form__label">Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name"
                                />
                            </div>
                            <div class="form-group col-md-8">
                                <label className="form__label">Title</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Title"
                                />
                            </div>
                            <div class="form-group col-md-8">
                                <label className="form__label">Body</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="name"
                                    onChange={(e) => setBody(e.target.value)}
                                    placeholder="Body"
                                />
                            </div>
                            <div className="form-group">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-12">
                                <button type="button" class="btn btn-warning btn-lg"
                                    data-mdb-ripple-color="dark" onClick={() => handleSubmit()} >Save</button>
                            </div>
                        </div>
                        </div>
                    </form>
                </div>

            </div>



        </div>

    );
};
export default Post;
