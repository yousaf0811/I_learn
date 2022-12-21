import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Editpost = (prop) => {
    const navigate = useNavigate();
    const [searchPerms] = useSearchParams()
    const [database, setDatabase] = useState(null);
    const [name, setName] = useState(null);
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "name") {
            setTitle(value);
        }
        if (id === "tilte") {
            setTitle(value);
        }
        if (id === "body") {
            setTitle(value);
        }
    };
    useEffect(() => {
        console.log(prop)
        let postID = searchPerms.get('postId');
        console.log("Data :: ", " :: ", postID);
        fetch("http://localhost:3010/post/" + postID)
            .then((resp) => resp.json())
            .then((info) => {
                setDatabase(info)
                console.log(info)
                setName(info.name)
                setTitle(info.title)
                setBody(info.body)

            });
    }, []);
    const handleEditSubmit = () => {
        // console.log(name);
        if (!name) { alert('Fill the empty input fields'); return false };
        const user = database;
        user.name = name;
        user.title = title;
        user.body = body;




        localStorage.setItem('name', JSON.stringify(name));
        fetch('http://localhost:3010/post/' + database.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(resp => resp.json()).then(info => handleClick());
    };


    const handleClick = () => {
        navigate('/viewpost')
    };



    return (
        <div>
            <h3>Edit_Post</h3>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <div class="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <div class="d-flex align-items-center">
                            <button type="button" class="btn btn-danger" onClick={() => { navigate('/') }}>Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="dashboard">
                <div style={{ paddingTop: 50 }}><button type="button" class="btn btn-dark btn-lg px-2" onClick={() => { navigate('/teacheredit') }}>Edit Account</button></div>
                <div style={{ paddingTop: 50 }}><button type="button" class="btn btn-dark btn-lg px-2 " onClick={() => { navigate('/Createpost') }}>Create Post</button></div>
                <div style={{ paddingTop: 50 }}><button type="button" class="btn btn-dark btn-lg px-3 " onClick={() => { navigate('/viewpost') }}>View Post</button></div>
            </div>
            <div class="container-2">

                <form name="blog_post" className="form-horizontal">
                    <div className="username">
                        <label className="form__label">Name</label>
                        <input
                            className="form-control"
                            value={name}
                            type="text"
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                        />
                    </div>

                    <div className="Title">
                        <label className="form__label">Title</label>
                        <input
                            className="form-control"
                            value={title}
                            type="text"
                            id="text"
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                        />
                    </div>
                    <div className="username">
                        <label className="form__label">Body</label>
                        <input
                            value={body}
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
                                data-mdb-ripple-color="dark" onClick={() => handleEditSubmit()} >Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};
export default Editpost;
